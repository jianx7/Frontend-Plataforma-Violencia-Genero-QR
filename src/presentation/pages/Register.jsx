import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Register() {
  return (
    <main className="min-vh-100 d-flex align-items-center">
      <Container fluid>
        <Row className="align-items-center">
          {/* Panel izquierdo */}
          <Col
            md={6}
            className="bg-register text-light p-5 d-flex flex-column justify-content-center"
          >
            <h1 className="fw-bold mb-4 fs-1">¡Bienvenida!</h1>
            <p className="lead mb-4 fs-5">
              Esta plataforma digital busca apoyar y orientar a mujeres en
              situaciones de violencia. Regístrate para acceder a nuestros
              recursos y servicios.
            </p>
            <article>
              <img
                src="/assets/imagen-bienvenida.png"
                alt="Imagen institucional"
                className="img-fluid rounded"
              />
            </article>
          </Col>

          {/* Panel derecho */}
          <Col md={6} className="p-5">
            <h2 className="fw-bold mb-3 fs-1">Crea tu cuenta</h2>
            <p className="mb-4 fs-4">
              Ingresa los siguientes datos para iniciar el proceso de registro:
            </p>

            <Form className="form-gob">
              <Form.Group controlId="file-01" className="mb-3 fs-5">
                <Form.Label className="fw-semibold">
                  Escanea tu INE para confirmar tu identidad
                </Form.Label>
                <Form.Control size="lg" type="file" accept="application/pdf" />
              </Form.Group>

              <FloatingLabel
                controlId="floatingApellidos"
                label="Apellidos"
                className="mb-3 fs-5"
              >
                <Form.Control
                  size="lg" type="text"
                  placeholder="Escribe tus apellidos"
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingNombre"
                label="Nombre"
                className="mb-3"
              >
                <Form.Control
                  size="lg" type="text"
                  placeholder="Escribe tu nombre"
                  required
                />
              </FloatingLabel>

              <Form.Group className="mb-3">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control size="lg" type="date" required />
              </Form.Group>

              <FloatingLabel
                controlId="floatingEmail"
                label="E-mail o número telefónico"
                className="mb-3"
              >
                <Form.Control
                  size="lg" type="email"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingPassword"
                label="Contraseña"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Escribe tu contraseña"
                  required
                />
              </FloatingLabel>

              <Form.Text className="text-muted d-block mb-3 fs-6">
                Debe tener al menos 9 caracteres, una mayúscula y un carácter
                especial (*@_).
              </Form.Text>

              <Form.Group controlId="terms" className="mb-3">
                <Form.Check
                  type="checkbox"
                  label={
                    <>
                      Acepto los{" "}
                      <a href="#" className="fw-semibold">
                        Términos y condiciones
                      </a>{" "}
                      y la{" "}
                      <a href="#" className="fw-semibold">
                        Política de privacidad
                      </a>
                      .
                    </>
                  }
                  required
                />
              </Form.Group>

              <Button
                variant="danger"
                type="submit"
                size="lg"
                className="w-100 fw-bold"
              >
                Registrarse
              </Button>

              <p className="mt-3 text-center fs-5">
                ¿Ya tienes una cuenta?{" "}
                <a href="/login" className="fw-semibold">
                  Inicia sesión
                </a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
