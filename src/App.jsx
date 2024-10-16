import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage'
import MovieDetail from './components/MovieDetail';
import './index.css';


function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App