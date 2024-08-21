import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="login">Criar/Login</Link>
      </nav>
    </header>
  );
};

export default Header;
