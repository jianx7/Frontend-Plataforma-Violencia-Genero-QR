import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Table, Button, Card } from "react-bootstrap";

export default function MisCasos() {
  const navigate = useNavigate();

  // Datos falsos
  const casos = [
    {
      folio: "A120",
      victima: "Ana López",
      tipo: "Física",
      prioridad: "Alta",
      estado: "Nuevo",
      municipio: "Benito Juárez",
      fecha: "2025-02-15",
    },
    {
      folio: "A121",
      victima: "—Alias",
      tipo: "Sexual",
      prioridad: "Media",
      estado: "Proceso",
      municipio: "Solidaridad",
      fecha: "2025-02-14",
    },
  ];

  return (
    
      <Container fluid className="py-4">
        <Row>
          {/* ===== SIDEBAR ===== */}
          <Col md={3} lg={2} className="mb-4">
            <Card className="shadow-sm p-3">
              <h5 className="fw-bold">Filtros</h5>

              <Form.Group className="mb-3">
                <Form.Label>Tipo de violencia</Form.Label>
                <Form.Select>
                  <option>Todos</option>
                  <option>Física</option>
                  <option>Psicológica</option>
                  <option>Sexual</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Estado del caso</Form.Label>
                <Form.Select>
                  <option>Todos</option>
                  <option>Nuevo</option>
                  <option>Proceso</option>
                  <option>Finalizado</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Municipio</Form.Label>
                <Form.Select>
                  <option>Todos</option>
                  <option>Benito Juárez</option>
                  <option>Solidaridad</option>
                  <option>Tulum</option>
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Card>
          </Col>

          {/* ===== TABLA DE CASOS ===== */}
          <Col md={9} lg={10}>
            <h2 className="fw-bold mb-3">Mis casos</h2>

            <Card className="shadow-sm p-3">
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Folio</th>
                    <th>Víctima</th>
                    <th>Tipo</th>
                    <th>Prioridad</th>
                    <th>Estado</th>
                    <th>Municipio</th>
                    <th>Ver</th>
                  </tr>
                </thead>

                <tbody>
                  {casos.map((caso) => (
                    <tr key={caso.folio}>
                      <td>{caso.folio}</td>
                      <td>{caso.victima}</td>
                      <td>{caso.tipo}</td>
                      <td>{caso.prioridad}</td>
                      <td>{caso.estado}</td>
                      <td>{caso.municipio}</td>
                      <td>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() =>
                            navigate(`/encargado/caso/${caso.folio}`, {
                              state: { caso },
                            })
                          }
                        >
                          Ver
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
   
  );
}
