import { createStore, combineReducers } from 'redux';

import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import sidebarReducer from './reducers/sidebarReducer';
import usersReducer from "./reducers/usersReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

const store = createStore(reducers);

export default store;
