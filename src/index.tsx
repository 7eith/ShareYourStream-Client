import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';
import { BrowserRouter as Router } from "react-router-dom";

import '@/utilities/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
