import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticleListPage';
import MapDetailPage from './pages/MapDetailPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticleListPage />} />
          <Route path="/map/:id" element={<MapDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;