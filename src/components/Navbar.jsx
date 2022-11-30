import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a className={styles.item} href="/home">
            Profile
          </a>
        </li>
        <li>
          <a className={styles.item} href="/home">
            Messages
          </a>
        </li>
        <li>
          <a className={styles.item} href="/home">
            News
          </a>
        </li>
        <li>
          <a className={styles.item} href="/home">
            Music
          </a>
        </li>
        <li>
          <a className={styles.item} href="/home">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
