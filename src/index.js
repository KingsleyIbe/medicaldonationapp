import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const uri = 'http://localhost:3000/kyc';
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={uri}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
