import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardRoutes } from '../Dashboard/routes/DashboardRoutes';
import { LoginContext } from '../auth/context/loginContext';
import { Login } from '../auth/pages/Login/index';

export const AppRouter = () => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="*" element={<DashboardRoutes />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
