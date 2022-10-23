import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from 'react-redux';

import '@/utilities/i18n';
import '@/style/app.scss';

import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);
