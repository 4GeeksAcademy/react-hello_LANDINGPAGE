// src/js/components/Jumbotron.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Hero() {
  return (
    <Container fluid className="bg-light p-5 mb-4 text-center rounded-3">
      <h1 className="display-4">A Warm Welcome!</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
      </p>
      <Button variant="primary" size="lg">Call to action!</Button>
    </Container>
  );
}
