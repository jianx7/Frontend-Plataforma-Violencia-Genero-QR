import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-custom p-5">
        {/*Formulario*/}
      <Container fluid>
        <Row className="align-items-start text-light">
          <Col md={5} className="mb-4">
          <p className="smalltext-muted mb-2">
              Plataforma desarrollada para proteger a las mujeres de Quintana Roo.
            </p>
            <h5 className="mb-0">Mantengamos el contacto</h5>
            <h4 className="fw-bold mb-3">
              Tu opinión importa
            </h4>
            <p className="small">
              Si tienes algún comentario o presentas fallas en nuestra
              plataforma, escribelo aquí.
            </p>
            <InputGroup className="mt-3 footer-input ">
              <Form.Control placeholder="Escribe aquí" />
              <Button className="btn-gob">Enviar</Button>
            </InputGroup>
          </Col>
        
        {/* Información*/}
          <Col md={7}>
            <Row className="justify-content-end text-start">
              <Col md={4}>
                <h5 className="fw-bold">PDCVG-QR</h5>
                <p className="fw-semibold mb-1">Contáctanos</p>
                <p className="mb-1">pdcvg_qr@gmail.com</p>
                <p className="mb-1">+52 9988976683</p>
                <p>Cancún, Quintana Roo</p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <a href="#" className="text-white"><FaFacebookSquare size={22} /></a>
                  <a href="#" className="text-white"><FaSquareXTwitter size={22} /></a>
                </div>
              </Col>

              {/* Términos */}
              <Col md={4} className="text-start">
                <h6 className="fw-semibold">Términos</h6>
                <p className="small mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus nostrum autem eum nesciunt!
                </p>
              </Col>

              {/* Privacidad */}
              <Col md={4} className="text-start">
                <h6 className="fw-semibold">Privacidad</h6>
                <p className="small mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus nostrum autem eum nesciunt!
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="my-4 border-light opacity-2"/>
        <p className="text-center small text-light mb-0">
          © 2025 GITASVG-QR | Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
}
