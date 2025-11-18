import { Container, Row, Col } from "react-bootstrap";
import StatCard from "../components/admin-view/StatCard";
import RecentCases from "../components/admin-view/RecentCases";


export default function DashboardAdmin() {
  return (
    <Container fluid className="dashboard-container py-4">
      <h1 className="fw-bold dash-text">
        Panel del Encargado
      </h1>
      <p className="text-muted">
        Aquí puedes revisar tus casos, citas y actividades recientes.
      </p>

      {/* Tarjetas de estadísticas */}
      <Row className="g-4 mt-2">
        <Col md={3}>
          <StatCard title="Casos nuevos" value={3} variant="danger" />
        </Col>
        <Col md={3}>
          <StatCard title="Urgentes" value={1} variant="warning" />
        </Col>
        <Col md={3}>
          <StatCard title="Citas del día" value={4} variant="success" />
        </Col>
        <Col md={3}>
          <StatCard title="Total de casos" value={18} variant="primary" />
        </Col>
      </Row>

      {/* Tabla de casos recientes */}
      <Row className="mt-5">
        <Col md={12}>
          <RecentCases />
        </Col>
      </Row>
    </Container>
  );
}
