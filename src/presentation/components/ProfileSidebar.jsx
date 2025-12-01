import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import {
  BsShieldLock,
  BsPersonCircle,
  BsBoxArrowRight,
  BsTrash,
} from "react-icons/bs";
import { useLogoutModal } from "../hooks/useLogoutModal";
import ConfirmLogoutModal from "../components/ConfirmLogoutModal";

export default function ProfileSidebar() {
  const location = useLocation();
  const { showModal, openLogoutModal, handleConfirmLogout, handleCancelLogout } = useLogoutModal();

  return (
    <>
      <aside className="sidebar p-3 bg-gob-dark text-white rounded">
        <ListGroup variant="flush">
          <ListGroup.Item
            as={Link}
            to="/perfil/user-info"
            active={location.pathname === "/perfil/user-info"}
            className="bg-transparent text-white border-0 d-flex align-items-center gap-2 sidebar-item"
          >
            <BsPersonCircle />
            Información personal
          </ListGroup.Item>

          <ListGroup.Item
            as={Link}
            to="/perfil/security"
            active={location.pathname === "/perfil/security"}
            className="bg-transparent text-white border-0 d-flex align-items-center gap-2 sidebar-item"
          >
            <BsShieldLock />
            Sesión y seguridad
          </ListGroup.Item>

          <ListGroup.Item
            onClick={openLogoutModal}
            className="bg-transparent text-white border-0 d-flex align-items-center gap-2 sidebar-item"
            style={{ cursor: 'pointer' }}
          >
            <BsBoxArrowRight />
            Cerrar sesión
          </ListGroup.Item>

          <ListGroup.Item
            as={Link}
            to="/delete-account"
            className="bg-transparent text-danger border-0 d-flex align-items-center gap-2 sidebar-item"
          >
            <BsTrash />
            Eliminar cuenta
          </ListGroup.Item>
        </ListGroup>
      </aside>

      {/* Modal de confirmación */}
      <ConfirmLogoutModal
        show={showModal}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </>
  );
}