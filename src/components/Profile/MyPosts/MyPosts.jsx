import React from 'react';

import Post from './Post/Post';
import { addPostActionCreator } from '../../dataState/reducers/profileReducer';
import { updateNewPostTextActionCreator } from '../../dataState/reducers/profileReducer';

import styles from './MyPosts.module.css';

const MyPosts = (props) => {
  const postElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    const action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={styles.postsWrapper}>
      <h3> My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
            name="textarea"
            id=""
            cols="40"
            rows="4"
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
