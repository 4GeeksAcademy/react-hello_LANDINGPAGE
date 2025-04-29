import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Footer
 * ------
 * Pie de página con créditos y/o links menores.
 */
export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col className="text-center">
            © {new Date().getFullYear()} JonShk 2025. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
