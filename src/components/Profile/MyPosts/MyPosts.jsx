import React from 'react';

import Post from './Post/Post';

import styles from './MyPosts.module.css';

const MyPosts = (props) => {
  const postElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostTex(text);
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
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
