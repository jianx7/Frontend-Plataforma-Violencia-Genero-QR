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
          </Col>
        </Row>
      </Container>
    </ProfileLayout>
  );
}
