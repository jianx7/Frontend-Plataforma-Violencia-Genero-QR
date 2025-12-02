import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { MOCK_CASOS } from "../../../infrastructure/mocks/casos"; // ruta ajusta

export default function DetalleCaso() {
  const { folio } = useParams();
  const location = useLocation();
  const [caso, setCaso] = useState(null);

  useEffect(() => {
    if (location.state && location.state.caso) {
      setCaso(location.state.caso);
      return;
    }
    // Si no vino por state, buscar en el mock
    const found = MOCK_CASOS.find((c) => c.folio === folio);
    setCaso(found || null);
  }, [folio, location.state]);

  if (!caso) {
    return (
      <Container className="py-5">
        <h3>Caso no encontrado</h3>
        <p>El folio {folio} no existe en los datos de ejemplo.</p>
      </Container>
    );
  }

  return (
    <Container fluid className="dashboard-container p-4">
      <h2>Folio: {caso.folio}</h2>
          <p><strong>Tipo:</strong> {caso.tipo} — <strong>Estado:</strong> {caso.estado}</p>
      <Row>
        <Col md={8}>
          

          <Card className="mb-3">
            <Card.Header className="card-header">Datos de la víctima</Card.Header>
            <Card.Body>
              <p><strong>Nombre:</strong> {caso.victima.nombre}</p>
              <p><strong>Alias:</strong> {caso.victima.alias}</p>
              <p><strong>Correo:</strong> {caso.victima.correo}</p>
              <p><strong>Fecha:</strong> {caso.fecha}</p>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Header className="card-header">Relato</Card.Header>
            <Card.Body>{caso.relato}</Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-3">
            <Card.Header className="card-header">Acciones</Card.Header>
            <Card.Body className="d-flex flex-column gap-2">
              <Button variant="outline-secondary">Marcar en revisión</Button>
              <Button variant="danger">Cerrar caso</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
