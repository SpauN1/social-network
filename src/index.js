import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import dataState from './components/dataState/dataState';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dataState={dataState} />
  </React.StrictMode>
);
