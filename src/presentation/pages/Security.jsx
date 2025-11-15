import ProfileLayout from "../components/ProfileLayout";
import { Container, Row, Col, Card, Form, Button, ListGroup } from "react-bootstrap";


export default function Security() {
  return (
    <ProfileLayout>
      <Container
        fluid
        className="mh-100vh"
      >
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <h2 className="fw-bold text-dark mb-4">Seguridad y sesión</h2>

            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="mb-3">Cambiar contraseña</Card.Title>

                <Form>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formCurrentPassword">
                        <Form.Label>Contraseña actual</Form.Label>
                        <Form.Control type="password" placeholder="••••••••" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formNewPassword">
                        <Form.Label>Nueva contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Crea una nueva contraseña"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formConfirmPassword" className="mb-4">
                    <Form.Label>Confirmar nueva contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Repite la nueva contraseña"
                    />
                  </Form.Group>

                  <div className="d-flex gap-3">
                    <Button className="btn-gob" type="submit">
                      Guardar cambios
                    </Button>
                    <Button variant="outline-secondary">Cancelar</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>

            <Card className="shadow-sm border-0">
              <Card.Body>
                <Card.Title className="mb-3">Sesiones activas</Card.Title>
                <Card.Text className="text-muted">
                  Estos son los dispositivos donde has iniciado sesión.
                </Card.Text>

                <ListGroup variant="flush" className="mb-3">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Chrome</strong> — Windows 11
                      <p className="text-muted small mb-0">
                        Último acceso: hace 2 horas
                      </p>
                    </div>
                    <Button variant="outline-danger" size="sm">
                      Cerrar sesión
                    </Button>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Safari</strong> — iPhone 14
                      <p className="text-muted small mb-0">
                        Último acceso: hace 1 día
                      </p>
                    </div>
                    <Button variant="outline-danger" size="sm">
                      Cerrar sesión
                    </Button>
                  </ListGroup.Item>
                </ListGroup>

                <Button variant="danger">Cerrar todas las sesiones</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </ProfileLayout>
  );
}
