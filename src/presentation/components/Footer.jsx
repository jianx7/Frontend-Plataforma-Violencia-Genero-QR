import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-custom text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="gy-4">
          
          {/* Formulario */}
          <Col md={5}>
            <h5 className="fw-bold">Tu opinión importa</h5>
            <p className="small mb-3">
              Si tienes algún comentario o presentas fallas en nuestra plataforma, escríbenos aquí.
            </p>

            <Form className="d-flex gap-2">
              <Form.Control 
                type="email" 
                placeholder="Escribe tu correo o comentario…" 
              />
              <Button variant="secondary">
                Enviar
              </Button>
            </Form>
          </Col>

          {/* Col derecha */}
          <Col md={7}>
            <Row>
              <Col md={4} className="mb-3">
                <h6 className="fw-bold">PDCVG-QR</h6>
                <p className="small mb-1 fw-semibold">Contacto</p>
                <p className="small mb-1">pdcvg_qr@gmail.com</p>
                <p className="small mb-1">+52 998 897 6683</p>
                <p className="small">Cancún, Quintana Roo</p>

                <div className="d-flex gap-3 pt-2">
                  <a href="#" className="footer-link">
                    <FaFacebookSquare size={22} />
                  </a>
                  <a href="#" className="footer-link">
                    <FaSquareXTwitter size={22} />
                  </a>
                </div>
              </Col>

              <Col md={4} className="mb-3">
                <h6 className="fw-semibold">Términos</h6>
                <p className="small mb-0">
                  Al usar la plataforma aceptas los Términos y Condiciones. Si no estás de acuerdo, evita utilizarla.
                </p>
              </Col>

              <Col md={4} className="mb-3">
                <h6 className="fw-semibold">Privacidad</h6>
                <p className="small mb-0">
                  Los datos se conservan conforme a la Ley General de Protección de Datos en Posesión de Sujetos Obligados.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />
        <p className="text-center small mb-0">
          © 2025 PDCVG-QR | Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
}
