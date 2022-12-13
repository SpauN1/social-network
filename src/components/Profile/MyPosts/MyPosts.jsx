import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = () => {
  const postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 8},
  ];
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
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
