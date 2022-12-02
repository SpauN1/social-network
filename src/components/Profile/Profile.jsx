import MyPosts from './MyPosts/MyPosts';

import style from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img className={style.img}
          src="https://wp-s.ru/wallpapers/2/99/288935050117095/tropicheskij-plyazh-na-poberezhe-golubogo-avstralijskogo-morya.jpg"
          alt="beach"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
