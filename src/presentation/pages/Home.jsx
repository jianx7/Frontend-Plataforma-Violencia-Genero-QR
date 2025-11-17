import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  Accordion,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiSolidBookBookmark } from "react-icons/bi";
import { IoWoman } from "react-icons/io5";
import { GoLaw } from "react-icons/go";

export default function Home() {
  return (
    <main>
      {/* Sección 1 */}
      <Container fluid className="py-5 home-container home-bg">
        <Row className="justify-content-md-center">
          <Col md={6} className="text-md-start w-100">
            <h1 className="hero-title text-light">Bienvenida</h1>
            <p className="hero-text">
              No estás sola. <br />
              Te ayudamos a realizar tu pre-denuncia y recibir apoyo de forma
              segura.
            </p>
            <Button className="btn-gob px-4 py-2">
              Iniciar chat de orientación
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Sección 2*/}
      <Container className="p-5 text-center space-section d-flex flex-column justify-content-center align-items-center">
        <h4>CONOCE MÁS:</h4>
        <h2>
          <strong>
            Plataforma Digital Contra la Violencia de Género en Quintana Roo
          </strong>
        </h2>
        <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">
          <div className="circle-wrapper">
            <Button
              className="btn-circle"
              as={Link}
              to="/directorio"
              active={location.pathname === "/directorio"}
            >
              <BiSolidBookBookmark size={68} />
            </Button>
            <p className="circle-text">Directorios de ayuda</p>
          </div>

          <div className="circle-wrapper">
            <Button
              className="btn-circle"
              as={Link}
              to="/instancias"
              active={location.pathname === "/instancias"}
            >
              <IoWoman size={70} />
            </Button>
            <p className="circle-text">Instancias de la mujer</p>
          </div>

          <div className="circle-wrapper">
            <Button
              className="btn-circle"
              as={Link}
              to="/derechos"
              active={location.pathname === "/derechos"}
            >
              <GoLaw size={70} />
            </Button>
            <p className="circle-text">Conoce tus derechos</p>
          </div>
        </div>
      </Container>

      {/* Sección 3 */}
      <div className="carousel-banner">
        <Carousel fade interval={3000} pause={false} indicators={false}>
          <Carousel.Item>
            <div
              className="bg-repeat"
              style={{
                backgroundImage:
                  "url('../src/presentation/assets/carrusel-1.jpeg')",
              }}
            ></div>

            <img
              src="../src/presentation/assets/carrusel-1.jpeg"
              alt="slide 1"
              className="d-block mx-auto"
            />
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="bg-repeat"
              style={{
                backgroundImage:
                  "url('../src/presentation/assets/carrusel-2.jpeg')",
              }}
            ></div>

            <img
              src="../src/presentation/assets/carrusel-2.jpeg"
              alt="slide 2"
              className="d-block mx-auto"
            />
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="bg-repeat"
              style={{
                backgroundImage:
                  "url('../src/presentation/assets/carrusel-3.jpeg')",
              }}
            ></div>

            <img
              src="../src/presentation/assets/carrusel-3.jpeg"
              alt="slide 3"
              className="d-block mx-auto"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Sección 4*/}
      <Container
        fluid
        className="p-5 text-center space-section d-flex flex-column justify-content-center align-items-center"
      >
        <h2>
          <strong>Preguntas frecuentes</strong>
        </h2>
        <Accordion defaultActiveKey="0" className="mt-4 text-start">
          <Accordion.Item eventKey="0" className="faq-accordion">
            <Accordion.Header>
              <strong>¿Qué es la PDCVG-QR?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Es una plataforma digital diseñada para proporcionar información,
              asistencia y herramientas de denuncia segura a las víctimas de
              violencia de género en Quintana Roo.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="faq-accordion">
            <Accordion.Header>
              <strong>¿Qué servicios ofrece?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Ofrece asistencia mediante chatbot, acceso a directorios de apoyo,
              seguimiento de pre-denuncias y herramientas para contactar con
              autoridades responsables.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="faq-accordion">
            <Accordion.Header>
              <strong>¿Cómo puedo hacer una denuncia?</strong>
            </Accordion.Header>
            <Accordion.Body>
              A través del formulario digital dentro de la plataforma, donde se
              validará tu identidad de manera segura antes de enviar la
              pre-denuncia a las autoridades correspondientes.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </main>
  );
}
