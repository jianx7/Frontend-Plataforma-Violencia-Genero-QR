import { useEffect, useState } from "react";
import ProfileLayout from "../components/ProfileLayout";
import { Form, Button, Container, Row, Col, Spinner, Alert } from "react-bootstrap";

export default function UserInfo() {
  // Estados
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);        // Mostrar spinner mientras carga
  const [saving, setSaving] = useState(false);         // Mientras se envía
  const [message, setMessage] = useState(null);        // Mensaje de éxito/error

  /** 🔥 OBTENER INFO DEL USUARIO */
  useEffect(() => {
    // 🔁 MOCK REQUEST — reemplace con fetch real
    setTimeout(() => {
      setUser({
        username: "inesita",
        email: "inesita@mail.com",
      });
      setLoading(false);
    }, 800);
  }, []);

  /** 📝 Manejar cambios de input */
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  /** 📤 Enviar form */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      // 🔁 MOCK de actualización
      // Aquí reemplaza por fetch PUT o PATCH a tu API
      setTimeout(() => {
        setSaving(false);
        setMessage({ type: "success", text: "Datos actualizados correctamente." });
      }, 1000);

      /**
      EJEMPLO de PUT real a FastAPI 👇
      
      const resp = await fetch("https://tuapi.com/user/123", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      
      if (!resp.ok) throw new Error("Error al actualizar");
      */

    } catch (err) {
      setSaving(false);
      setMessage({ type: "danger", text: "Error al guardar cambios." });
    }
  };

  return (
    <ProfileLayout>
      <Container fluid className="mh-100vh py-3">
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <h2 className="fw-bold text-gob-dark mb-4">
              Información de la cuenta
            </h2>

            {/*⌛ LOADING */}
            {loading ? (
              <div className="text-center">
                <Spinner animation="border" />
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                
                {/* Mensaje de feedback */}
                {message && (
                  <Alert variant={message.type}>{message.text}</Alert>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Nombre de usuario</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  className="btn-gob"
                  type="submit"
                  disabled={saving}
                >
                  {saving ? "Guardando..." : "Guardar cambios"}
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </ProfileLayout>
  );
}
