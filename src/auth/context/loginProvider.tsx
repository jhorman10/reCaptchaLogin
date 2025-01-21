import React, { ReactNode, useState } from 'react';
import { LoginContext } from './loginContext';

type Props = {
  children: ReactNode;
};

export const LoginContextProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
