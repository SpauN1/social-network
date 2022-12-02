import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
  const setActive = ({ isActive }) => (isActive ? styles.active : styles.item);

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.item}>
          <NavLink className={setActive} to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={setActive} to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={setActive} to="/News">
            News
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={setActive} to="/Music">
            Music
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={setActive} to="/Settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
