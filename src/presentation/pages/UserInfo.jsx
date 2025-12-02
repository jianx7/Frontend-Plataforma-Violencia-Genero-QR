import { useEffect, useState } from "react";
import ProfileLayout from "../components/ProfileLayout";
import { Form, Button, Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useAuth } from "../../app/context/AuthContext";

export default function UserInfo() {
  const { user: authUser } = useAuth();
  
  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  // Cargar información del usuario
  useEffect(() => {
    if (authUser) {
      setUser({
        nombre: authUser.nombre || "",
        email: authUser.email || "",
      });
      setLoading(false);
    }
  }, [authUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      // TODO: Implementar endpoint de actualización en el backend
      // Por ahora solo mostramos mensaje
      setTimeout(() => {
        setSaving(false);
        setMessage({ 
          type: "info", 
          text: "La actualización de datos estará disponible próximamente." 
        });
      }, 500);

      /* Cuando esté listo el endpoint:
      const response = await axiosClient.put('/user/profile', {
        nombre: user.nombre,
        email: user.email,
      });
      
      if (response.success) {
        setMessage({ type: "success", text: "Datos actualizados correctamente." });
      }
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

            {loading ? (
              <div className="text-center">
                <Spinner animation="border" />
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                {message && (
                  <Alert variant={message.type}>{message.text}</Alert>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={user.nombre}
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
                    disabled // Por seguridad, el email no debería cambiar fácilmente
                  />
                  <Form.Text className="text-muted">
                    El correo electrónico no puede ser modificado.
                  </Form.Text>
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