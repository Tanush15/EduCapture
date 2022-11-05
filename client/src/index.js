import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Auth0Provider
  domain= {process.env.REACT_APP_AUTH_DOMAIN}
  clientId= {process.env.REACT_APP_AUTH_CLIENTID}
  redirectUri={window.location.origin}
>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Auth0Provider>
);

