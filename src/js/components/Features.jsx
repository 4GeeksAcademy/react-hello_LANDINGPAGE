// src/js/components/Features.jsx
import React from 'react';
import InfoCard from './InfoCard';

export default function Features() {
  const cardsData = [
    {
      imgSrc: 'https://via.placeholder.com/500x325',
      title: 'Card title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
      buttonText: 'Find Out More!',
      buttonLink: '#'
    },
    {
      imgSrc: 'https://via.placeholder.com/500x325',
      title: 'Card title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
      buttonText: 'Find Out More!',
      buttonLink: '#'
    },
    {
      imgSrc: 'https://via.placeholder.com/500x325',
      title: 'Card title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
      buttonText: 'Find Out More!',
      buttonLink: '#'
    },
    {
      imgSrc: 'https://via.placeholder.com/500x325',
      title: 'Card title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
      buttonText: 'Find Out More!',
      buttonLink: '#'
    }
  ];

  return (
    <section id="features" className="container py-5">
      <h2 className="text-center mb-4">Our Features</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 align-items-stretch">
        {cardsData.map((data, idx) => (
          <div className="col" key={idx}>
            <InfoCard {...data} />
          </div>
        ))}
      </div>
    </section>
  );
}
