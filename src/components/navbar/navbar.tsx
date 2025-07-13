import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <p className={styles.name}>JeffSC</p>
        <div>
        <Link to="/" className={styles.navLinks}>Home</Link>
        <Link to="/about" className={styles.navLinks}>Fotografias</Link>
        </div>
    </nav>
  );
}

export default Navbar;