// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Video from './components/Video';
import Footer from './components/Footer'; // Ensure this import is correct
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ProductList />
      <Video />
      <Footer /> {/* Footer component here */}
    </div>
  );
};

export default App;
