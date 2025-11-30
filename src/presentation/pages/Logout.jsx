import { useState } from "react";
import { useAuth } from "../../app/context/AuthContext";
import ConfirmLogoutModal from "../components/ConfirmLogoutModal";

export default function Logout() {
  const { logout } = useAuth();
  const [show, setShow] = useState(true);

  const handleConfirm = () => {
    logout(); // ← aquí se ejecuta authService.logout()
  };

  const handleCancel = () => {
    setShow(false);
    window.history.back(); // Regresa a la página anterior
  };

  return (
    <ConfirmLogoutModal
      show={show}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
}
