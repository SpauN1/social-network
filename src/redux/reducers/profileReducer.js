const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  postsData: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 8 },
    { id: 3, message: "It's my", likesCount: 11 },
    { id: 4, message: 'I like', likesCount: 11 },
  ],
  newPostText: 'new entered text',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      const stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }

    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }

    default:
      return state;
  }
};

const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
export { addPostActionCreator, updateNewPostTextActionCreator };
