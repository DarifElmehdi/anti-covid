import React from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="/">
        <img
          alt=""
          src="assets/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      ANTI-COVID
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
      <Nav className="ml-auto" text-align="left">
        <Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
        <Nav.Link as={NavLink} to="/precaution">Précaution</Nav.Link>
        <Nav.Link as={NavLink} to="/statistiques">Statistiques</Nav.Link>
        <Nav.Link as={NavLink} to="/login">Se Connecter</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
