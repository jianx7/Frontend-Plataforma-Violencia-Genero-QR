import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from "react-bootstrap/Alert";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useAuth } from "../../app/context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login, isAdmin } = useAuth();

  // Estados del formulario
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error al escribir
    if (error) setError("");
  };

  // Manejar submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validaciones básicas
    if (!formData.email || !formData.password) {
      setError("Por favor completa todos los campos");
      setLoading(false);
      return;
    }

    try {
      // Llamar al login desde el contexto
      await login({
        email: formData.email,
        password: formData.password,
      });

      // Redirigir según el rol del usuario
      if (isAdmin()) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Error en login:", err);
      setError(
        err?.message || 
        "Correo o contraseña incorrectos. Por favor intenta de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="vh-100">
      <Container fluid className="h-100 px-0">
        <Row className="h-100">
          {/* Columna izquierda: Imagen */}
          <Col
            sm={4}
            md={6}
            className="bg-register text-light p-5 d-flex flex-column justify-content-center position-relative"
          >
            {/*Button className="btn-back" onClick={() => window.history.back()}>
              <IoMdArrowRoundBack color="#ffff" size={30} />
            </Button>*/}
            <h1 className="fw-bold mb-4 fs-1">¡Bienvenida!</h1>
            <p className="lead mb-4 fs-5">
              Esta plataforma digital busca apoyar y orientar a mujeres en
              situaciones de violencia. Inicia sesión para recibir la atención
              adecuada.
            </p>
          </Col>

          {/* Columna derecha: formulario */}
          <Col
            md={6}
            sm={8}
            className="p-5 d-flex flex-column h-100 overflow-hidden"
          >
            <Form
              className="form-gob form-scroll flex-grow-1"
              onSubmit={handleSubmit}
            >
              <h2 className="text-register mb-3">Bienvenida a Segura</h2>
              <p className="mb-4 fs-4">Inicio de Sesión</p>

              {/* Mostrar errores */}
              {error && (
                <Alert variant="danger" dismissible onClose={() => setError("")}>
                  {error}
                </Alert>
              )}

              <FloatingLabel
                controlId="floatingEmail"
                label="Correo electrónico"
                className="mb-3 fs-5"
              >
                <Form.Control
                  size="lg"
                  type="email"
                  name="email"
                  placeholder="correo@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingPassword"
                label="Contraseña"
                className="mb-3 fs-5"
              >
                <Form.Control
                  size="lg"
                  type="password"
                  name="password"
                  placeholder="Ingrese su contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </FloatingLabel>

              <Link to="/recuperar" className="d-block mb-3">
                ¿Olvidaste la contraseña?
              </Link>

              <Button
                variant="danger"
                type="submit"
                size="lg"
                className="w-100 fw-bold mt-4"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Iniciando sesión...
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>

              <p className="mt-4 text-center">
                ¿No tienes una cuenta?{" "}
                <Link to="/register">
                  Regístrate
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
}