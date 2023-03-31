import React from 'react';
import './FuturisticNavbar.css';
import { Link } from 'react-router-dom';

const FuturisticNavbar = () => {
  return (
    <header className="futuristic-navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo-link">
          <div className="nav-logo">Frizeria D&D</div>
        </Link>
        <nav className="nav-menu">
          <Link to="/detalii" className="nav-link">
            Detalii
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default FuturisticNavbar;
