import style from './MyPosts.module.css';

import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea name="textarea" id="" cols="40" rows="4"></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
