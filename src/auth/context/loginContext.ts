import { createContext, Dispatch, SetStateAction } from 'react';

type LoginContextType = {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const LoginContext = createContext<LoginContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => { },
});
