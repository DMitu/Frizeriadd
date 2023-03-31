import React from 'react';
import './FHeader.css';
import Frizeria from '../images/Frizeria.jpg';

const FHeader = () => {
  return (
    <header className="header-container">
      <img className="header-image" src={Frizeria} alt="Futuristic Haircut" />
      <h1 className="header-text">Get a haircut.</h1>
    </header>
  );
};

export default FHeader;
