import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={style.postsWrapper}>
      <h3> My post</h3>
      <div>
        <div>
          <textarea name="textarea" id="" cols="40" rows="4"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        <Post message={'Hi, how are you?'} />
        <Post message={"It's my first post"} />
      </div>
    </div>
  );
};

export default MyPosts;
