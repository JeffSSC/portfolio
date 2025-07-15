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
        <a href="/curriculum.pdf" target="_blank" rel="noopener noreferrer" className={styles.navLinks}>Currículo</a>
        <Link to="/fotografias" className={styles.navLinks}>Fotografias</Link>
      </nav>
      <button className={styles.hamburgerIcon} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
      <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <Link to="/" className={styles.navLinks} onClick={toggleMenu}>Home</Link>
        <a href="https://docs.google.com/document/d/1MJTTYfAWJDIk0TgvIRLrZI-AzKZ4ur7DmEoO9oe--bA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.navLinks} onClick={toggleMenu}>Currículo</a>
        <Link to="/fotografias" className={styles.navLinks} onClick={toggleMenu}>Fotografias</Link>
      </nav>

    </header>
  );
}

export default Navbar;