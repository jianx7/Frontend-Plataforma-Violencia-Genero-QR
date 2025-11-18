import { Link } from "react-router-dom";
import { Nav, Container, NavDropdown, Navbar } from "react-bootstrap";
import { FaBell } from "react-icons/fa";

export default function AdminNavbar() {
  return (
    <Navbar expand="md" variant="dark" className="navbar-custom">
      <Container>
        <Navbar.Brand className="text-center" as={Link} to="/">
          GITASVG-QR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="subNavBarDropdown" />
        <Navbar.Collapse id="subNavBarDropdown">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/dashboard">
              Mis casos
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/dashboard">
              Agenda de citas
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/dashboard">
              <FaBell className="me-2" />
              Notificaciones
            </Nav.Link>
          </Nav>
          <NavDropdown title="Perfil" id="navbarDropdown" className="ms-auto">
            <h3 className="text-center">Nombre</h3>
            <NavDropdown.Item as={Link} to="/admin/dashboard">
              Información de la cuenta
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/admin/dashboard">
              Sesión y seguridad
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/admin/dashboard">
              Cerrar sesión
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
