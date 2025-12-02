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
import Chat from "../components/Chat";
import { useState, useEffect } from "react";
import { GiInjustice } from "react-icons/gi";

export default function Home() {
const [showChat, setShowChat] = useState(false);

  const openChat = () => setShowChat(true);
  const closeChat = () => setShowChat(false);

  return (
    <main>
      <Container fluid className="py-5 home-container home-bg">
        <Row className="justify-content-md-center">
          <Col md={6} className="text-md-start w-100">
            <h1 className="hero-title text-light">Bienvenida</h1>
            <p className="hero-text">
              No estás sola. <br />
              Te ayudamos a realizar tu pre-denuncia y recibir apoyo de forma segura.
            </p>

            {/* Este botón abre el mismo Offcanvas que el botón flotante */}
            <Button onClick={openChat} className="btn-gob px-4 py-2">
              Iniciar orientación
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Chat global */}
      <Chat
                show={showChat}
                onOpen={() => setShowChat(true)}
                onClose={() => setShowChat(false)}
            />
      

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
            <p className="circle-text fs-5">Directorios de ayuda</p>
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
            <p className="circle-text fs-5">Acerca de la violencia digital</p>
          </div>

          <div className="circle-wrapper">
            <Button
              className="btn-circle rotate-icon"
              as={Link}
              to="/derechos"
              active={location.pathname === "/derechos"}
            >
              <div >
                <GiInjustice size={74}/>
              </div>
              
            </Button>
            <p className="circle-text fs-5">Conoce tus derechos</p>
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
                  "url('../src/presentation/assets/carrusel-1.png')",
              }}
            ></div>

            <img
              src="../src/presentation/assets/carrusel-1.png"
              alt="slide 1"
              className="d-block mx-auto"
            />
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="bg-repeat"
              style={{
                backgroundImage:
                  "url('../src/presentation/assets/carrusel-2.png')",
              }}
            ></div>

            <img
              src="../src/presentation/assets/carrusel-2.png"
              alt="slide 2"
              className="d-block mx-auto"
            />
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="bg-repeat"
              style={{
                backgroundImage:
                  "url('../src/presentation/assets/carrusel-3.png')",
              }}
            ></div>

            <img
              src="../src/presentation/assets/carrusel-3.png"
              alt="slide 3"
              className="d-block mx-auto"
            />
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="bg-repeat"
              style={{
                backgroundImage:
                  "url('../src/presentation/assets/carrusel-5.png')",
              }}
            ></div>

            <img
              src="../src/presentation/assets/carrusel-4.png"
              alt="slide 3"
              className="d-block mx-auto"
            />
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="bg-repeat"
              style={{
                backgroundImage:
                  "url('../src/presentation/assets/carrusel-5.png')",
              }}
            ></div>

            <img
              src="../src/presentation/assets/carrusel-5.png"
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
              <strong>¿Qué es "Segura"?</strong>
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
