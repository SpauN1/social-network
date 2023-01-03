import React from 'react';

import { addPostActionCreator } from '../../../redux/reducers/profileReducer';
import { updateNewPostTextActionCreator } from '../../../redux/reducers/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      addPost={addPost}
      updateNewPostTex={onPostChange}
      postsData={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;