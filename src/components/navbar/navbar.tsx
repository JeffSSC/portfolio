import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logo}>JeffSC</Link>
      <nav className={styles.desktopNav}>
        <Link to="/" className={styles.navLinks}>Home</Link>
        <a href="https://drive.google.com/file/d/1RLiLgoDZMgOl9531SAx2RD3AnsbJrTok/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.navLinks}>Currículo</a>
        <a href="https://www.pexels.com/pt-br/@jefferson-silva-caires-41369603/" target="_blank" rel="noopener noreferrer" className={styles.navLinks}>Fotografias</a>
      </nav>
      <button className={styles.hamburgerIcon} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
      <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <Link to="/" className={styles.navLinks} onClick={toggleMenu}>Home</Link>
        <a href="https://drive.google.com/file/d/1RLiLgoDZMgOl9531SAx2RD3AnsbJrTok/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.navLinks} onClick={toggleMenu}>Currículo</a>
        <a href='https://www.pexels.com/pt-br/@jefferson-silva-caires-41369603/'>Fotografias</a>
      </nav>

    </header>
  );
}

export default Navbar;