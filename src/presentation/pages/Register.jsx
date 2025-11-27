import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useAuth } from "../../app/context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { register, isAdmin } = useAuth();

  // Estados del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Limpiar errores al escribir
    if (error) setError("");
    if (passwordError) setPasswordError("");
  };

  // Validar contraseña
  const validatePassword = (password) => {
    // Mínimo 9 caracteres, una mayúscula y un carácter especial
    const minLength = password.length >= 9;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[*@_]/.test(password);

    if (!minLength) {
      return "La contraseña debe tener al menos 9 caracteres";
    }
    if (!hasUpperCase) {
      return "La contraseña debe tener al menos una mayúscula";
    }
    if (!hasSpecialChar) {
      return "La contraseña debe tener al menos un carácter especial (*@_)";
    }
    return "";
  };

  // Manejar submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPasswordError("");
    setLoading(true);

    // Validaciones
    if (!formData.nombre || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Por favor completa todos los campos");
      setLoading(false);
      return;
    }

    // Validar formato de contraseña
    const passwordValidation = validatePassword(formData.password);
    if (passwordValidation) {
      setPasswordError(passwordValidation);
      setLoading(false);
      return;
    }

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Las contraseñas no coinciden");
      setLoading(false);
      return;
    }

    try {
      // Llamar al registro desde el contexto
      await register({
        nombre: formData.nombre,
        email: formData.email,
        password: formData.password,
      });

      // Redirigir según el rol (si el backend hace auto-login)
      if (isAdmin()) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Error en registro:", err);
      setError(
        err?.message || 
        "Ocurrió un error al registrarte. Por favor intenta de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="vh-100">
      <Container fluid className="h-100 px-0">
        <Row className="h-100">
          {/* Panel izquierdo */}
          <Col
            sm={5}
            md={6}
            className="bg-register text-light p-5 d-flex flex-column justify-content-center h-100"
          >
            <Button className="btn-back" onClick={() => window.history.back()}>
              <IoMdArrowRoundBack color="#ffff" size={30} />
            </Button>
            <h1 className="fw-bold mb-4 fs-1">¡Bienvenida!</h1>
            <p className="lead mb-4 fs-5">
              Esta plataforma digital busca apoyar y orientar a mujeres en
              situaciones de violencia. Regístrate para acceder a nuestros
              recursos y servicios.
            </p>
          </Col>

          {/* Panel derecho */}
          <Col
            sm={7}
            md={6}
            className="p-5 d-flex flex-column h-100 overflow-hidden"
          >
            <Form
              className="form-gob form-scroll flex-grow-1"
              onSubmit={handleSubmit}
            >
              <h2 className="text-register mb-3">Crea tu cuenta</h2>
              <p className="mb-4 fs-5">
                Ingresa los siguientes datos para iniciar el proceso de
                registro:
              </p>

              {/* Mostrar errores */}
              {error && (
                <Alert variant="danger" dismissible onClose={() => setError("")}>
                  {error}
                </Alert>
              )}

              <Form.Group
                controlId="floatingNombre"
                className="mb-3 fs-5 fw-semibold"
              >
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="nombre"
                  placeholder="Escribe tu nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </Form.Group>

              <Form.Group className="mb-3 fs-5 fw-semibold" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </Form.Group>

              <Form.Group
                controlId="floatingPassword"
                className="mb-3 fs-5 fw-semibold"
              >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  size="lg"
                  type="password"
                  name="password"
                  placeholder="Escribe tu contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  isInvalid={!!passwordError}
                />
                <Form.Text className="text-muted d-block mt-2 fs-6">
                  Debe tener al menos 9 caracteres, una mayúscula y un carácter
                  especial (*@_).
                </Form.Text>
              </Form.Group>

              <Form.Group
                controlId="floatingConfirmPassword"
                className="mb-3 fs-5 fw-semibold"
              >
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control
                  size="lg"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirma tu contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  isInvalid={!!passwordError}
                />
                {passwordError && (
                  <Form.Control.Feedback type="invalid">
                    {passwordError}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Button
                variant="danger"
                type="submit"
                size="lg"
                className="w-100 fw-bold fs-5"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Registrando...
                  </>
                ) : (
                  "Registrarse"
                )}
              </Button>

              <p className="mt-4 text-center">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/login">
                  Inicia sesión
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
}