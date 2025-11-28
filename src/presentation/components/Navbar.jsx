import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { GoLaw } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

export default function CustomNavbar() {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="md"
      variant="dark"
      className="navbar-custom py-2"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container fluid>

        {/* LOGO */}
        <Navbar.Brand className="fw-bold text-white fs-3">
          Segura
        </Navbar.Brand>

        {/* TOGGLE */}
        <Navbar.Toggle aria-controls="mainNavbar" className="border-0 text-white" />

        {/* COLLAPSE */}
        <Navbar.Collapse id="mainNavbar" className="w-100">

          {/** 🔹 BLOQUE MENÚ PRINCIPAL — CENTRADO */}
          <Nav
            className="
              flex-column flex-md-row 
              justify-content-md-center 
              align-items-md-center 
              mx-auto 
              gap-md-5 
              mt-3 mt-md-0
            "
            style={{ flexGrow: 1 }}
          >
            <Nav.Link
              as={Link}
              to="/"
              className="nav-item-custom"
              onClick={() => setExpanded(false)}
            >
              <IoMdHome className="me-1" />
              Inicio
            </Nav.Link>

            <NavDropdown
              title={
                <span className="nav-item-custom">
                  <GoLaw className="me-1" />
                  Denuncia
                </span>
              }
              id="navbarDropdown1"
              className="nav-item-dropdown"
            >
              <NavDropdown.Item className="nav-item-dropdown-item" as={Link} to="/predenuncia" onClick={() => setExpanded(false)}>
                Pre-denuncia
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-item-dropdown-item" as={Link} to="/seguimiento" onClick={() => setExpanded(false)}>
                Seguimiento
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/directorio"
              className="nav-item-custom"
              onClick={() => setExpanded(false)}
            >
              <FaLocationDot size={20} className="me-1" />
              Directorio
            </Nav.Link>
          </Nav>

          {/** 🔹 PERFIL — SIEMPRE A LA DERECHA */}
          <Nav className="ms-md-auto mt-3 mt-md-0">
            <NavDropdown
              title={
                <span className="nav-item-profile text-white">
                  <FaRegUserCircle size={28} className="me-1" />  </span>
              }
              id="navbarDropdown2"
              align="end" 
            >
              <NavDropdown.Item className="nav-item-dropdown-item" as={Link} to="/user-info" onClick={() => setExpanded(false)}>
                Información de la cuenta
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-item-dropdown-item" as={Link} to="/security" onClick={() => setExpanded(false)}>
                Sesión y seguridad
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-item-dropdown-item" as={Link} to="/logout" onClick={() => setExpanded(false)}>
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




