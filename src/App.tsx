import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PhotoPage from './pages/PhotoPage';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<PhotoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;