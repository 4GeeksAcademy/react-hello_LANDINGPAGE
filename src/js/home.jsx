// src/js/components/Home.jsx
import React from 'react';
import Navbar    from './Navbar';
import Hero      from './Jumbotron';
import Features  from './Features';
import Footer    from './Footer';

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        <Hero />
        <Features />
      </main>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
