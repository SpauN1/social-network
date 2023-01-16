import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        src="https://avatars.mds.yandex.net/i?id=b9f3feddf3461caa166c24ad968c03af-4572045-images-thumbs&n=13&exp=1"
        alt="paw"
      />
      <div className={styles.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
