import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={style.img}
          src="https://wp-s.ru/wallpapers/2/99/288935050117095/tropicheskij-plyazh-na-poberezhe-golubogo-avstralijskogo-morya.jpg"
          alt="beach"
        />
      </div>
      <div className={style.description}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
