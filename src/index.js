import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import dataState from './components/dataState/dataState';
import { addPost, updateNewPostText, subscribe } from './components/dataState/dataState';

import './index.css';

const rerenderEntireTree = (dataState) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App
        dataState={dataState}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree(dataState);
subscribe(rerenderEntireTree);
