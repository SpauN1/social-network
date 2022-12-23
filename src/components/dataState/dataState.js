import { rerenderEntireTree } from '../../render';

const dataState = {
  profilePage: {
    postsData: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 8 },
      { id: 3, message: "It's my", likesCount: 11 },
      { id: 4, message: 'I like', likesCount: 11 },
    ],
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
  },
};

const addPost = (postMessage) => {
  const newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  dataState.profilePage.postsData.push(newPost);
  rerenderEntireTree(dataState);
};

export default dataState;
export { addPost };
