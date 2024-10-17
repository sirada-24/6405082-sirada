import React from 'react';

const MyButton = ({ label }) => {
  const handleClick = () => {
    alert(`${label} clicked!`);
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {label}
    </button> 
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default MyButton;
