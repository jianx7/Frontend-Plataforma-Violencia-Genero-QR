import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Home() {
  return (
    <div className="home-gob">
      {/* Sección de bienvenida */}
      <Container fluid className="hero-section text-center py-5">
        <Row className="align-items-center justify-content-center">
          <Col md={6} className="text-md-start text-center">
            <h1 className="hero-title">Bienvenida</h1>
            <p className="hero-text">
              No estás sola. <br />
              Te ayudamos a realizar tu pre-denuncia y recibir apoyo de forma segura.
            </p>
            <Button className="btn-gob px-4 py-2">
              Iniciar chat de orientación
            </Button>
          </Col>

          <Col md={5} className="text-center">
            <div className="hero-img"></div>
          </Col>
        </Row>
      </Container>

      {/* Sección de plataforma */}
      <section className="platform-section text-center py-5">
        <h5 className="platform-subtitle">texto·texto</h5>
        <h2 className="platform-title">
          Plataforma Digital Contra la Violencia de Género en Quintana Roo
        </h2>

        <Row className="justify-content-center mt-4">
          <Col md={3} className="mb-3">
            <Card className="option-card">
              <div className="option-img"></div>
              <Card.Body>
                <Card.Title>Iniciar denuncia</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="option-card">
              <div className="option-img"></div>
              <Card.Body>
                <Card.Title>Ver directorios de ayuda</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="option-card">
              <div className="option-img"></div>
              <Card.Body>
                <Card.Title>Consultar seguimiento</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Sección de campañas */}
      <section className="campaigns-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={5}>
              <div className="campaign-img"></div>
            </Col>
            <Col md={6}>
              <h2 className="campaign-title">Campañas del gobierno</h2>
              <p className="campaign-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                et nisl, sagittis venenatis morbi montes scelerisque. Eget orci integer.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            {[1, 2, 3].map((i) => (
              <Col md={3} key={i} className="mb-3">
                <Card className="mini-card"></Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
