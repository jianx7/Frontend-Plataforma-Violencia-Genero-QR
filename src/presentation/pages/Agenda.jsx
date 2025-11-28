import { useState } from "react";
import { Container, Row, Col, Card, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";


export default function Agenda() {
  // Datos falsos
  const citas = [
    { id: 1, fecha: "2025-02-03", folio: "A120", victima: "Ana López", hora: "11:00 AM" },
    { id: 2, fecha: "2025-02-06", folio: "A121", victima: "María Pérez", hora: "02:30 PM" },
    { id: 3, fecha: "2025-02-12", folio: "A122", victima: "—Alias", hora: "09:00 AM" },
  ];

  const [citaSeleccionada, setCitaSeleccionada] = useState(null);

  // Días del calendario simulado
  const diasMes = Array.from({ length: 28 }, (_, i) => i + 1);

  const obtenerCitaPorDia = (dia) => {
    const fecha = `2025-02-${String(dia).padStart(2, "0")}`;
    return citas.find((c) => c.fecha === fecha);
  };

  return (
      <Container fluid className="py-4">
        <Row>
          {/* Sidebar */}
          <Col md={3} lg={2}>
            {/* Aquí va tu sidebar del encargado */}
          </Col>

          {/* Contenido principal */}
          <Col md={9} lg={10}>
            <h2 className="fw-bold mb-4">Agenda</h2>

            {/* Vista: Calendario / Lista */}
            <ToggleButtonGroup type="radio" name="views" defaultValue={1} className="mb-3">
              <ToggleButton id="calendar-view" value={1} variant="outline-primary">
                Calendario
              </ToggleButton>
              <ToggleButton id="list-view" value={2} variant="outline-primary">
                Lista
              </ToggleButton>
            </ToggleButtonGroup>

            <Row>
              {/* Calendario */}
              <Col md={7}>
                <Card className="p-3 shadow-sm">
                  <h5 className="fw-bold mb-3">Febrero 2025</h5>

                  <div className="calendar-grid">
                    {diasMes.map((dia) => {
                      const cita = obtenerCitaPorDia(dia);

                      return (
                        <div
                          key={dia}
                          className={`calendar-day ${cita ? "has-cita" : ""}`}
                          onClick={() => cita && setCitaSeleccionada(cita)}
                        >
                          {dia}
                          {cita && <span className="dot"></span>}
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </Col>

              {/* Detalle de cita */}
              <Col md={5}>
                <Card className="p-3 shadow-sm">
                  <h5 className="fw-bold">Cita seleccionada</h5>

                  {citaSeleccionada ? (
                    <div className="mt-3">
                      <p><strong>Folio:</strong> {citaSeleccionada.folio}</p>
                      <p><strong>Víctima:</strong> {citaSeleccionada.victima}</p>
                      <p><strong>Hora:</strong> {citaSeleccionada.hora}</p>

                      <div className="d-flex gap-3 mt-3">
                        <Button variant="primary">Confirmar</Button>
                        <Button variant="outline-secondary">Reagendar</Button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted mt-3">Selecciona un día con cita.</p>
                  )}
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  );
}
