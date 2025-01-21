import React, { useCallback, useContext, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';
import { MockContext } from '../../../context/mockContext';
import { useLogIn } from '../../hooks/useLogIn';
import './style.css';

const LoginForm: React.FC = () => {
  const { users } = useContext(MockContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false); // Estado para manejo de inicio de sesión
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { handleLogin } = useLogIn({ email, password, captchaVerified });

  const onVerify = useCallback((token: string | null) => {
    if (token) {
      setCaptchaVerified(true);
      setCaptchaError(null); // Limpiar error si el captcha es válido
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaVerified) {
      setCaptchaError('Por favor, verifica el captcha');
      Swal.fire('Error', 'Por favor, verifica el captcha', 'error');
      return;
    }

    // Deshabilitar el botón durante el inicio de sesión
    setIsLoggingIn(true);

    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      handleLogin(); // Manejo de login
      Swal.fire('Éxito', 'Inicio de sesión exitoso', 'success');
    } else {
      Swal.fire('Error', 'Credenciales inválidas', 'error');
    }

    // Rehabilitar el botón después del intento
    setIsLoggingIn(false);
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form-header">Login</h2>
        <div className="input-container">
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY!}
            onChange={onVerify}
          />
          {captchaError && <p className="error-text">{captchaError}</p>}
          <button
            disabled={!captchaVerified || isLoggingIn}
            className="login-button"
            type="submit"
          >
            {isLoggingIn ? 'Iniciando sesión...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export const Login: React.FC = () => <LoginForm />;
