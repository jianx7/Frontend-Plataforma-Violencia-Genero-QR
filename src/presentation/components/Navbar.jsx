import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

export default function CustomNavbar() {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="md"
      variant="dark"
      className="navbar-custom"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand className="fw-bold text-white navbar-brand">
          GITASVG-QR
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="subNavBarDropdown"
          className="border-0 text-white"
        />

        <Navbar.Collapse id="subNavBarDropdown" className="justify-content-between">
          <Nav className="mx-auto text-center">

            <Nav.Link
              as={Link}
              to="/"
              className="mx-md-4"
              onClick={() => setExpanded(false)}
            >
              Inicio
            </Nav.Link>

            <NavDropdown
              title="Denuncia"
              id="navbarDropdown1"
              className="mx-md-4"
            >
              <NavDropdown.Item as={Link} to="/predenuncia" onClick={() => setExpanded(false)}>
                Predenuncia
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/seguimiento" onClick={() => setExpanded(false)}>
                Seguimiento
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/directorio" className="mx-md-4" onClick={() => setExpanded(false)}>
              Directorio
            </Nav.Link>

            {/*<Nav.Link as={Link} to="/ayuda" className="mx-md-2" onClick={() => setExpanded(false)}>
              Ayuda
            </Nav.Link>*/}

            <NavDropdown title="Perfil" id="navbarDropdown2" className="mx-md-4">
              <h5 className="text-center">Usuario</h5>
              <NavDropdown.Item as={Link} to="/user-info" onClick={() => setExpanded(false)}>
                Información de la cuenta
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/security" onClick={() => setExpanded(false)}>
                Sesión y seguridad
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/logout" onClick={() => setExpanded(false)}>
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ms-md-auto text-center mt-2 mt-md-0">
            <Nav.Link as={Link} to="/login" className="text-white" onClick={() => setExpanded(false)}>
              <FaRegUserCircle size={24} />
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
