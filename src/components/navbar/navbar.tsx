import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <p className={styles.logo}>JeffSC</p>
        <div className={styles.navLinksContainer}>
          <Link to="/" className={styles.navLinks}>Home</Link>
          <a href="" className={styles.navLinks}><p>Curriculum</p></a>
          <Link to="/about" className={styles.navLinks}>Fotografias</Link>
        </div>
    </nav>
  );
}

export default Navbar;