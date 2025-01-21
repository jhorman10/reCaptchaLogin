import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LoginContextProvider } from './auth/context/loginProvider';
import { MockContextProvider } from './context/mockProvider';
import './index.css';
import { AppRouter } from './routes/AppRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <MockContextProvider>
          <AppRouter />
        </MockContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
