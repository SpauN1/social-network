import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          className={styles.img}
          src="https://wp-s.ru/wallpapers/2/99/288935050117095/tropicheskij-plyazh-na-poberezhe-golubogo-avstralijskogo-morya.jpg"
          alt="userPhoto"
        />
      </div>
      <div className={styles.description}>
        <img src={props.profile.photos.large} alt="userPhoto" />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
