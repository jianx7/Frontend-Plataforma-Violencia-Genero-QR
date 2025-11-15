//import Chatbot from "./Chatbot";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* Sección 1 */}
      <Container fluid className="py-5 home-container home-bg">
        <Row className="justify-content-md-center">
          <Col md={6} className="text-md-start w-100">
            <h1 className="hero-title">Bienvenida</h1>
            <p className="hero-text">
              No estás sola. <br />
              Te ayudamos a realizar tu pre-denuncia y recibir apoyo de forma
              segura.
            </p>
            <Link to={"/chatbot"}>
              <Button className="btn-gob px-4 py-2">
                Iniciar chat de orientación
              </Button>
            </Link>

          </Col>
        </Row>
      </Container>

      {/* Sección 2*/}
      <Container fluid className="p-5 text-center">
        <h4>CONOCE MÁS:</h4>
        <h2>
          <strong>
            Plataforma Digital Contra la Violencia de Género en Quintana Roo
          </strong>
        </h2>
        <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="../src/presentation/assets/login.jpg"
            />
            <Button variant="light" size="lg">
              Conoce tus derechos
            </Button>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="../src/presentation/assets/login.jpg"
            />
            <Button variant="light" size="lg">
              Conoce tus derechos
            </Button>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="../src/presentation/assets/login.jpg"
            />
            <Button variant="light" size="lg">
              Conoce tus derechos
            </Button>
          </Card>
        </div>
      </Container>

      {/* Sección 3*/}
      <div className="carousel">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../src/presentation/assets/imagen-bienvenida.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../src/presentation/assets/imagen-bienvenida.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../src/presentation/assets/imagen-bienvenida.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Sección 4*/}
      <Container className="p-5 text-center">
        <h4>INFORMACIÓN DE INTERÉS</h4>
        <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">

          <div className="circle-wrapper">
            <Button className="btn-circle">
            <FaSearch size={70} />
          </Button>
          <p className="circle-text">Instancias de la Mujer</p>
          </div>
          
          <div className="circle-wrapper">
            <Button className="btn-circle">
            <FaSearch size={70} />
          </Button>
          <p className="circle-text">
            Servicios de Prevención de la Violencia contra las Mujeres
          </p>
          </div>

          <div className="circle-wrapper">
            <Button className="btn-circle">
            <FaSearch size={70} />
          </Button>
          <p className="circle-text">Investigaciones de Violencia de Género</p>
          </div>
          
        </div>
      </Container>
    </main>
  );
}
