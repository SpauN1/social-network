import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        src="https://i.pinimg.com/originals/a8/8b/b6/a88bb6c1cbeeafe541d381d6d15d23d1.jpg"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
