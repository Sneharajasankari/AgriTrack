import React from 'react';
import './FarmerKit.css';
import { useNavigate } from 'react-router-dom';

const FarmerKit = () => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/Book');
  };

  const handleImageClick = () => {
    navigate('/Shome');
  };

  const houses = [
    "/farm/farmkit1.jpeg",
    "/farm/farmkit2.jpeg",
    "/farm/farmkit3.jpeg",
    "/farm/farmkit4.jpeg",
    "/farm/farmkit5.jpeg",
    "/farm/farmkit6.jpeg",
    "/farm/farmkit7.jpeg",
    "/farm/farmkit8.jpeg",
    "/farm/farmkit9.jpeg",
  ];

  return (
    <div className="houses-container">
      <h2 className="houses-heading">Farmers Kit</h2>
      <div className="house-list">
        {houses.map((house, index) => (
          <div key={index} className="house-item">
            <img
              onClick={handleImageClick}
              src={house}
              alt={`House ${index + 1}`}
              className="house-image"
            />
            <div className="house-details">
              <button onClick={handleBookClick} className="book-btn">click</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerKit;
