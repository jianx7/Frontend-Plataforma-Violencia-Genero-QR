import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegUserCircle } from "react-icons/fa";

export default function CustomNavbar() {
  return (
    <Navbar
      expand="md"
      variant="dark"
      className="navbar-custom"
    >
      <Container>
        <Navbar.Brand className="fw-bold text-white navbar-brand">
          GITASVG-QR
        </Navbar.Brand>

        {/* Botón de hamburguesa */}
        <Navbar.Toggle
          aria-controls="subNavBarDropdown"
          className="border-0 text-white"
        />

        <Navbar.Collapse id="subNavBarDropdown" className="justify-content-between navbar-collapse">
          <Nav className="mx-auto text-center">
            <Nav.Link as={Link} to="/" className="mx-md-4">Inicio</Nav.Link>

            <NavDropdown title="Denuncia" id="navbarDropdown" className="mx-md-4">
              <NavDropdown.Item as={Link} to="/predenuncia">Predenuncia</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/seguimiento">Seguimiento</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/directorio" className="mx-md-4">Directorio</Nav.Link>
            <Nav.Link as={Link} to="/ayuda" className="mx-md-2">Ayuda</Nav.Link>

            <NavDropdown title="Perfil" id="navbarDropdown" className="mx-md-4">
              <h3 className="text-center">Nombre</h3>
              <NavDropdown.Item as={Link} to="/user-info">Información de la cuenta</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/security">Sesión y seguridad</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/logout">Cerrar sesión</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ms-md-auto text-center mt-2 mt-md-0">
            <Nav.Link as={Link} to="/login" className="text-white">
              <FaRegUserCircle size={24} />
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
