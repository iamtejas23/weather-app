import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Weather App</h4>
            <p>Your reliable source for weather updates.</p>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Forecast</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: support@weatherapp.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 WeatherApp. All Rights Reserved.</p>
          <a
            href="https://github.com/iamtejas23/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-button"
          >
            <FontAwesomeIcon icon={faGithub} /> Made by Tejas Mane
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
