import ProfileLayout from "../components/ProfileLayout";
import { Form, Button } from "react-bootstrap";

export default function Logout() {
  return (
    
    <ProfileLayout>
      <h2 className="fw-bold text-gob-dark mb-4">Información de la cuenta</h2>

      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type="text" placeholder="alias" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="realName">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control type="text" placeholder="Nombre real" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="tel" placeholder="9988" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="correo" />
        </Form.Group>

        <Button className="btn-gob">Guardar cambios</Button>
      </Form>
    </ProfileLayout>
  );
}
