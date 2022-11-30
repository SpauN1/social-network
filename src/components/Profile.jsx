import style from './Profile.module.css';

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img
          src="https://wp-s.ru/wallpapers/2/99/288935050117095/tropicheskij-plyazh-na-poberezhe-golubogo-avstralijskogo-morya.jpg"
          alt="beach"
        />
      </div>
      <div>ava + description</div>
      <div>
        My post
        <div>New post</div>
        <div className={style.posts}>
          <div className={style.item}>post 1</div>
          <div className={style.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
