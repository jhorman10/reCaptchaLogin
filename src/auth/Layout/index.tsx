import { ReactNode } from 'react';
import './style.css';

type Props = {
  children: ReactNode;
};

export const LoginLayout = ({ children }: Props) => {
  return (
    <section className="login-layout">
      <div className="login-content">{children}</div>
    </section>
  );
};
