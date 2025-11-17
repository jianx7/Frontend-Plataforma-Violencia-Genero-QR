import { Container, Button, Accordion, Card} from "react-bootstrap";

export default function Instancias() {
  return (
      <Container
        fluid
        className="p-5 text-center space-section d-flex flex-column justify-content-center align-items-center"
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>
              <strong>BACALAR</strong>
            </h3>
          </Accordion.Header>
          <Accordion.Body>
            <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">
              <Card style={{ width: "68rem" }}>
                <Card.Header>
                  Secretaría de las Mujeres (Delegación Municipal)
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <strong>Servicios:</strong> Atención a la defensa de los
                    derechos de las mujeres. <br />
                    <strong>Teléfono:</strong> (983) 688 20 37 <br />
                    <strong>Dirección:</strong> Av. 11, Región 4, Mza 2 Lote 31
                    entre Calle 20 y 22, Locales 102-102, Colonia Gonzalo
                    Guerrero. <br />
                    <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                  </Card.Text>
                  <Button className="btn-gob">Ver mapa</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "68rem" }}>
                <Card.Header>
                  Comisión de Derechos Humanos del Estado de Quintana Roo
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <strong>Servicios:</strong> Recepción de quejas de la
                    ciudadanía en contra de personas del servicio público que
                    hayan incurrido en omisiones, negligencias y violaciones a
                    derechos humanos. <br />
                    <strong>Teléfono:</strong> 983 126 3101
                    <br />
                    <strong>Dirección:</strong> Adolfo López Mateos 699, Centro,
                    Bacalar, Q. Roo <br />
                    <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                  </Card.Text>
                  <Button className="btn-gob">Ver mapa</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "68rem" }}>
                <Card.Header>Fiscalía General del Estado</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <strong>Servicios:</strong> Recepción de denuncias por
                    delitos cometidos. Fiscalías especializadas reciben
                    denuncias por violencia familiar, sexual y de género. <br />
                    <strong>Teléfono:</strong> <br />
                    <strong>Dirección:</strong> Av. 9A con 12 s/n col. Serapio
                    Flota Mass, Bacalar, Q. Roo <br />
                    <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                  </Card.Text>
                  <Button className="btn-gob">Ver mapa</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "68rem" }}>
                <Card.Header>
                  Comisión de Derechos Humanos del Estado de Quintana Roo
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <strong>Servicios:</strong> Atención a la defensa de los
                    derechos de las mujeres. <br />
                    <strong>Teléfono:</strong> 983 126 3101 <br />
                    <strong>Dirección:</strong> Calle 5 S/N entre Calle 14 y
                    Calle 16 Colonia Centro. C.P. 77930. Bacalar, Quintana Roo.{" "}
                    <br />
                    <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                  </Card.Text>
                  <Button className="btn-gob">Ver mapa</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "68rem" }}>
                <Card.Header>Hospital Integral de Bacalar</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <strong>Servicios:</strong> Atención médica y psicológica de
                    emergencia. <br />
                    <strong>Teléfono:</strong> 983 834 2756 <br />
                    <strong>Dirección:</strong> Hospital Integral de Bacalar Av.
                    3 por 24 C.P. 77930, Bacalar, Q. Roo <br />
                    <strong>Horario:</strong> lun-dom abierto las 24 hrs
                  </Card.Text>
                  <Button className="btn-gob">Ver mapa</Button>
                </Card.Body>
              </Card>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion defaultActiveKey="1" className="mt-4 text-start">
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
  );
}
