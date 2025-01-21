import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MockContext } from "../../context/mockContext";
import { LoginContext } from "../context/loginContext";


type User = {
    email: string;
    password: string;
    captchaVerified?: boolean;
}

export const useLogIn = ({ email, password }: User) => {
    const navigate = useNavigate();
    const { users } = useContext(MockContext);
    const { setIsLoggedIn } = useContext(LoginContext)

    const handleLogin = (): void | null => {
        const user: User | undefined = users.find(user => user.email === email && user.password === password);
        if (user) {
            navigate('/');
            setIsLoggedIn(true);
        } else {
            Swal.fire('Error', 'Usuario o contraseña incorrecto', 'error');

            return null;
        }
    };
    return { handleLogin };
}
