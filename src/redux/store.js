import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import sidebarReducer from './reducers/sidebarReducer';

const store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 8 },
        { id: 3, message: "It's my", likesCount: 11 },
        { id: 4, message: 'I like', likesCount: 11 },
      ],
      newPostText: 'new entered text',
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Alexey' },
        { id: 5, name: 'Masha' },
        { id: 6, name: 'Sveta' },
      ],
      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'yo' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yo' },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },

  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
