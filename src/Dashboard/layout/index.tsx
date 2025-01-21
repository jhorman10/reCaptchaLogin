import { ReactNode } from 'react';
import { NavBar } from '../components';
import './style.css';

type Props = {
  children: ReactNode;
};

export const DashBoardLayout = ({ children }: Props) => {
  return (
    <section className="dashboard-layout">
      <NavBar />
      <div className="content">{children}</div>
    </section>
  );
};
