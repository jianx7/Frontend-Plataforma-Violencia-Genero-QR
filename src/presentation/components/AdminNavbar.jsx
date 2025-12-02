import { Link } from "react-router-dom";
import { Nav, Container, NavDropdown, Navbar } from "react-bootstrap";
import { useState } from "react";
import { useLogoutModal } from "../hooks/useLogoutModal";
import ConfirmLogoutModal from "../components/ConfirmLogoutModal";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaFolder } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";

export default function AdminNavbar() {
  const [expanded, setExpanded] = useState(false);
  const {
    showModal,
    openLogoutModal,
    handleConfirmLogout,
    handleCancelLogout,
  } = useLogoutModal();

  return (
    <>
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
          <Navbar.Toggle
            aria-controls="mainNavbar"
            className="border-0 text-white"
          />

          {/* COLLAPSE */}
          <Navbar.Collapse id="mainNavBar">
            {/** BLOQUE MENÚ PRINCIPAL — CENTRADO */}
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
                to="/admin/dashboard"
                className="nav-item-custom"
                onClick={() => setExpanded(false)}
              >
                <IoMdHome className="me-1" />
                Inicio
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/admin/casos"
                className="nav-item-custom"
                onClick={() => setExpanded(false)}
              >
                <FaFolder className="me-1"/>
                Mis casos
              </Nav.Link>

            </Nav>

            {/** PERFIL — SIEMPRE A LA DERECHA */}
            <Nav className="ms-md-auto mt-3 mt-md-0">
              <NavDropdown
                title={
                  <span className="nav-item-profile text-white">
                    <FaRegUserCircle size={28} className="me-1" />{" "}
                  </span>
                }
                id="navbarDropdown2"
                align="end"
              >
                <NavDropdown.Item
                  className="nav-item-dropdown-item"
                  onClick={() => {
                    setExpanded(false);
                    openLogoutModal();
                  }}
                >
                  Cerrar sesión
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Modal de confirmación */}
      <ConfirmLogoutModal
        show={showModal}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </>
  );
}
