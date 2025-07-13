import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import styles from './styles/navbar.module.css';


function App() {
  return (
    <BrowserRouter>
      {/* Menu de navegação para trocar de página */}
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navLinks}>Home</Link>
        <Link to="/about" className={styles.navLinks}>Sobre</Link>
      </nav>

      {/* Define qual componente renderizar para cada rota */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;