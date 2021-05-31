import React from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';

export default function Header() {
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="/">ANTI-COVID</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
      <Nav className="ml-auto" text-align="left">
        <Nav.Link href="/">Accueil</Nav.Link>
        <Nav.Link href="/precaution">Précaution</Nav.Link>
        <Nav.Link href="/statistiques">Statistiques</Nav.Link>
        <Nav.Link href="/covid19">Covid-19</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
