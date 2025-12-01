// src/presentation/components/ConfirmLogoutModal.jsx
import { Modal, Button } from "react-bootstrap";

export default function ConfirmLogoutModal({ show, onConfirm, onCancel }) {
  return (
    <Modal show={show} onHide={onCancel} centered backdrop="static" animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>¿Salir de tu cuenta?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Esta acción cerrará tu sesión actual.
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Salir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
