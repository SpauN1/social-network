import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { addPost } from './components/dataState/dataState';

import './index.css';

export const rerenderEntireTree = (dataState) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App dataState={dataState} addPost={addPost} />
    </React.StrictMode>
  );
};

// export { rerenderEntireTree };
