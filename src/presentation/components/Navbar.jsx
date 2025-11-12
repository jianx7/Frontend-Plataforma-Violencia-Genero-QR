import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function AppNavbar() {
  return (
    <Navbar expand="md" variant="dark" className="navbar-custom">
      <Container>
        <Navbar.Brand className="text-center" as={Link} to="/">GITASVG-QR</Navbar.Brand>
        <Navbar.Toggle aria-controls="subNavBarDropdown" />
        <Navbar.Collapse id="subNavBarDropdown">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="Denuncia" id="navbarDropdown">
              <NavDropdown.Item as={Link} to="/predenuncia">Predenuncia</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/seguimiento">Seguimiento</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/directorio">Directorio</Nav.Link>
             <Nav.Link as={Link} to="/ayuda">Ayuda</Nav.Link>
          </Nav>
          <NavDropdown title="Perfil" id="navbarDropdown" className="ms-auto">
            <h3 className="text-center">Nombre</h3>
              <NavDropdown.Item as={Link} to="/user-info">Información de la cuenta</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/security">Sesión y seguridad</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/logout">Cerrar sesión</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}
