import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTractor, faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const handleKitClick = () => {
    navigate('/FarmKit');
  };
    // Handle click for booking house
  
  return (
    <div className='abc'>
      <div className='home-wrapper'>
        <div className="home-container">
          <nav className="menu-bar">
            <img src='/image.png' alt="Agribuzz Logo" className="logo" />
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">FarmersKit</a></li>
              <li><a onClick={handleKitClick} href="#">FarmersMarket</a></li>
              <li><a href="#">MyAccount</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="content">
            <p className="logo-text">AgriTrack - Change The Way You Trade...</p>
            <p>Agriculture Management System to help farmers by providing all kinds of agriculture related information in the website...</p>
            <button className="oval-button">Get Started</button>
          </div>
          <div className="content-box">
            <div className="flex-container">
              <div className="flex-item">
                <FontAwesomeIcon icon={faUser} size="2x" />
                <p>Customer</p>
                <button className="oval-button">Click Me</button>
              </div>
              <div className="flex-item">
                <FontAwesomeIcon icon={faTractor} size="2x" />
                <p>Farmer</p>
                <button className="oval-button">Click Me</button>
              </div>
              <div className="flex-item">
                <FontAwesomeIcon icon={faPersonDigging} size="2x" />
                <p>Worker</p>
                <button className="oval-button">Click Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-section">
          <img src='/image.png' alt="Agribuzz Logo" className="logo" style={{ width: '100px'}} />
          <img src='' alt="Flag of India" className="flag" style={{ width: '30px', marginRight: '10px' }} />
          <div className="follow-us">
            <p>FOLLOW US</p>
            <div className="icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
