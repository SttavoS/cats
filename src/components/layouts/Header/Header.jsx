import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import CatsLogo from '../../../assets/icons/dogs.svg?react';
import { UserContext } from '../../../context/UserContext';

const Header = () => {
  const { data, logout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.navigation}`}>
        <Link to="/" className={styles.logo} aria-label="Cats | Home">
          <CatsLogo />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
            <button onClick={logout}>Sair</button>
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Criar/Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
