import React from 'react';
import hondaCivicImage from '../assets/honda-civic.jpg';

const CarImage = () => {
  return (
    <div>
      <img src={hondaCivicImage} alt="Honda Civic" style={imageStyle} />
    </div>
  );
};

const imageStyle = {
  width: '100%',
  maxWidth: '600px',
  borderRadius: '10px',
};

export default CarImage;
