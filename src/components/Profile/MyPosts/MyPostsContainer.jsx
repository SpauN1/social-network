import { connect } from 'react-redux';

import { addPostActionCreator } from '../../../redux/reducers/profileReducer';
import { updateNewPostTextActionCreator } from '../../../redux/reducers/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostTex: (text) => {
      const action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },

    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
