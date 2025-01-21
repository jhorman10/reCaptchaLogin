import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../../auth/context/loginContext';
import './style.css';

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpiar el estado de login y localStorage
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');

    // Redirigir al usuario a la página de login
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-title">Heroes</span>
      </div>
      <button
        className={`navbar-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        X
      </button>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {/* Enlace al perfil o dashboard si lo deseas */}
        {/* <li>
          <Link to="/" className="navbar-link">
            Inicio
          </Link>
        </li> */}
        <li>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};
