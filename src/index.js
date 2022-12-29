import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import store from './redux/store';

import './index.css';

const rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
