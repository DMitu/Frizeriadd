import React from 'react';
import './Details.css';
import Haircut1 from '../images/Haircut1.jpeg';
import Haircut3 from '../images/Haircut3.jpeg';
import Haircut4 from '../images/Haircut4.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Details = () => {
  const photos = [
    Haircut1,
    Haircut3,
    Haircut4
  ];

  return (
    <div className="details-container" id="detalii">
      <h3>Program: Marți-Sâmbătă</h3>
      <div className="social-icons">
        <a href="https://www.facebook.com/mihai.daniel.520" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} id="facebook-icon"/></a>
        <a href="https://www.instagram.com/ddy9292/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} id="instagram-icon"/></a>
        <a href="tel:+40761813149"><FontAwesomeIcon icon={faPhone} id="phone-icon"/></a>
      </div>
      <h2>✂️</h2>
      <div className="photos-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index + 1}`} className="photo" />
        ))}
      </div>
      
    </div>
  );
};

export default Details;
