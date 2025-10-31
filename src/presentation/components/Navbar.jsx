import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function navbar() {
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
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">Perfil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}
