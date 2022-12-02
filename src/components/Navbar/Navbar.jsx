import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink className={styles.item} to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item} to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item} to="/News">
            News
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item} to="/Music">
            Music
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item} to="/Settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
