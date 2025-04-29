// src/js/components/InfoCard.jsx
import React from 'react';

export default function InfoCard({
  imgSrc,
  title,
  text,
  buttonText,
  buttonLink
}) {
  return (
    <div className="card h-100 shadow-sm">
      {/* 1. Imagen en la parte superior */}
      <img
        src={imgSrc}
        className="card-img-top"
        alt={title}
        style={{ objectFit: 'cover', height: '325px' }}
      />

      {/* 2. Body con título y texto */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>

      {/* 3. Footer de la card con el botón centrado */}
      <div className="card-footer text-center">
        <a href={buttonLink} className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
}
