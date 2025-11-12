import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import {
  BsShieldLock,
  BsPersonCircle,
  BsBoxArrowRight,
  BsTrash,
} from "react-icons/bs";

export default function ProfileSidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar p-3 bg-gob-dark text-white rounded">
      <ListGroup variant="flush">
        <ListGroup.Item
          as={Link}
          to="/user-info"
          active={location.pathname === "/user-info"}
          className="bg-transparent text-white border-0 d-flex align-items-center gap-2 sidebar-item"
        >
          <BsPersonCircle />
          Información personal
        </ListGroup.Item>

        <ListGroup.Item
          as={Link}
          to="/security"
          active={location.pathname === "/security"}
          className="bg-transparent text-white border-0 d-flex align-items-center gap-2 sidebar-item"
        >
          <BsShieldLock />
          Sesión y seguridad
        </ListGroup.Item>

        <ListGroup.Item
          as={Link}
          to="/logout"
          className="bg-transparent text-white border-0 d-flex align-items-center gap-2 sidebar-item"
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
  );
}
