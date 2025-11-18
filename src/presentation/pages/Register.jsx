import {
  FloatingLabel,
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";

import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main className="vh-100">
      <Container fluid className="h-100 px-0">
        <Row className="h-100">
          {/* Panel izquierdo */}
          <Col 
            md={6}
            className="bg-register text-light p-5 d-flex flex-column justify-content-center h-100"
          >
            <h1 className="fw-bold mb-4 fs-1">¡Bienvenida!</h1>
            <p className="lead mb-4 fs-5">
              Esta plataforma digital busca apoyar y orientar a mujeres en
              situaciones de violencia. Regístrate para acceder a nuestros
              recursos y servicios.
            </p>
          </Col>

          {/* Panel derecho */}
          <Col
            md={6}
            className="p-5 d-flex flex-column h-100 overflow-hidden"
          >
            <Form className="form-gob form-scroll flex-gorw-1">
              <h2 className="text-register mb-3">Crea tu cuenta</h2>
              <p className="mb-4 fs-5">
                Ingresa los siguientes datos para iniciar el proceso de
                registro:
              </p>

              <Form.Group controlId="formFileLg" className="mb-3 fs-5">
                <Form.Label className="fw-semibold">
                  Escanea tu INE para confirmar tu identidad
                </Form.Label>
                <Form.Control size="lg" type="file" accept="application/pdf" />
              </Form.Group>

              <Form.Group
                controlId="floatingApellidos"
                label="Apellido paterno"
                className="mb-3 fs-5 fw-semibold"
              >
                <Form.Label>Apellido paterno</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Escribe tu apellido paterno"
                  required
                />
              </Form.Group>
              <Form.Group
                controlId="floatingApellidosM"
                label="Apellido materno"
                className="mb-3 fs-5 fw-semibold"
              >
                <Form.Label>Apellido materno</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Escribe tu apellido materno"
                  required
                />
              </Form.Group>

              <Form.Group
                controlId="floatingNombre"
                label="Nombre"
                className="mb-3 fs-5 fw-semibold"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Escribe tu nombre"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 fs-5 fw-semibold">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control size="lg" type="date" required />
              </Form.Group>

              <Form.Group className="mb-3 fs-5 fw-semibold" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </Form.Group>

              <Form.Group
                controlId="floatingPassword"
                label="Contraseña"
                className="mb-3 fs-5 fw-semibold"
              >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Escribe tu contraseña"
                  required
                />
              </Form.Group>

              <Form.Text className="text-muted d-block mb-3 fs-6">
                Debe tener al menos 9 caracteres, una mayúscula y un carácter
                especial (*@_).
              </Form.Text>

              <Form.Group
                controlId="floatingPassword"
                label="Contraseña"
                className="mb-3 fs-5 fw-semibold"
              >
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Escribe tu contraseña"
                  required
                />
              </Form.Group>


              <Button
                variant="danger"
                type="submit"
                size="lg"
                className="w-100 fw-bold fs-5"
              >
                Registrarse
              </Button>

              <p className="mt-4 text-center">
                ¿Ya tienes una cuenta?{" "}
                <Link
                  to="/login"
                  className={location.pathname === "/login" ? "active" : ""}
                >
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
