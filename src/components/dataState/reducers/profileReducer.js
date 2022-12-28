const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  if (action.type === 'ADD-POST') {
    const newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0,
    };
    state.postsData.push(newPost);
    state.newPostText = '';
  } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    state.newPostText = action.newText;
  }

  return state;
};

export default profileReducer
