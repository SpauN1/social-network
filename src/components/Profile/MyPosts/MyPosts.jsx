import Post from './Post/Post';

import styles from './MyPosts.module.css';

const MyPosts = (props) => {
  const postElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));
  return (
    <div className={styles.postsWrapper}>
      <h3> My post</h3>
      <div>
        <div>
          <textarea name="textarea" id="" cols="40" rows="4"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
