import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

/**
 * MyNavbar
 * --------
 * Encabezado con logo y enlaces de navegación.
 * Usa los componentes Navbar y Nav de React-Bootstrap.
 */
export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo o nombre de la marca */}
        <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
        {/* Botón responsive para colapsar el menú */}
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
