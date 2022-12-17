import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = () => {
  const postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 8},
  ];
  const postElements = postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));
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
      <div className={style.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
