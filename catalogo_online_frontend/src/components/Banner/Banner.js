import React from 'react';
import './Banner.css';

function Banner({ title, imageUrl }) {
  return (
    <div className="banner">
      <img src={imageUrl} alt={title} className="banner-image" />
      <h2>{title}</h2>
    </div>
  );
}

export default Banner;
