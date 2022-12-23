import React from 'react';
import ReactDOM from 'react-dom/client';

import dataState from './components/dataState/dataState';
import { rerenderEntireTree } from './render';

import './index.css';

rerenderEntireTree(dataState);
