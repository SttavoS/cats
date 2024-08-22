import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import CatsLogo from '../../../assets/icons/dogs.svg?react';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.navigation}`}>
        <Link to="/" className={styles.logo} aria-label="Cats | Home">
          <CatsLogo />
        </Link>
        <Link to="login" className={styles.login}>
          Criar/Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
