import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Login() {
  return (
    <main className="vh-100">
      <Container fluid className="h-100 px-0">
        <Row className="h-100">
          {/* Columna izquierda: Imagen */}
          <Col
            sm={4} md={6}
            className="bg-register text-light p-5 d-flex flex-column justify-content-center position-relative"
          >
            <Button className="btn-back" onClick={() => window.history.back()}>
                            <IoMdArrowRoundBack color="#ffff" size={30} />
                        </Button>
            <h1 className="fw-bold mb-4 fs-1">¡Bienvenida!</h1>
            <p className="lead mb-4 fs-5">
              Esta plataforma digital busca apoyar y orientar a mujeres en
              situaciones de violencia. Inicia sesión para recibir la atención
              adecuada.
            </p>
          </Col>

          {/* Columna derecha: formulario */}
          <Col md={6} sm={8} className="p-5 d-flex flex-column h-100 overflow-hidden">
            <Form className="form-gob form-scroll flex-gorw-1">
              <h2 className="text-register mb-3">Bienvenida a GITASVG-QR</h2>
              <p className="mb-4 fs-4">Inicio de Sesión</p>
              <FloatingLabel
                controlId="floatingEmail"
                label="Correo electrónico"
                className="mb-3 fs-5"
              >
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="correo@mail.com"
                  required
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
                  placeholder="Ingrese su contraseña"
                  required
                />
              </FloatingLabel>

              <Link
                  to="/recuperar"
                  className={location.pathname === "/recuperar" ? "active" : ""}
                >
                  ¿Olvidaste la contaseña?
                </Link>

              <Button
                variant="danger"
                type="submit"
                size="lg"
                className="w-100 fw-bold mt-4"
              >
                Entrar
              </Button>

              <p className="mt-4 text-center">
                ¿No tienes una cuenta?{" "}
                <Link
                  to="/register"
                  className={location.pathname === "/register" ? "active" : ""}
                >
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