import { Container, Card, Button, Accordion } from "react-bootstrap";

export default function Directorio() {
  return (
    <Container fluid className="p-5 text-center">
      <h2>
        <strong>Directorio</strong>
      </h2>

      <Container>
        <Accordion defaultActiveKey="0" className="mt-4 text-start">
          {/* BACALAR*/}
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
                      <strong>Dirección:</strong> Av. 11, Región 4, Mza 2 Lote
                      31 entre Calle 20 y 22, Locales 102-102, Colonia Gonzalo
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
                      <strong>Dirección:</strong> Adolfo López Mateos 699,
                      Centro, Bacalar, Q. Roo <br />
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
                      denuncias por violencia familiar, sexual y de género.{" "}
                      <br />
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
                      Calle 16 Colonia Centro. C.P. 77930. Bacalar, Quintana
                      Roo. <br />
                      <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>Hospital Integral de Bacalar</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> 983 834 2756 <br />
                      <strong>Dirección:</strong> Hospital Integral de Bacalar
                      Av. 3 por 24 C.P. 77930, Bacalar, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* BENITO JUAREZ*/}
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h3>
                <strong>BENITO JUÁREZ</strong>
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">
                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Secretaría de las Mujeres (Coordinación municipal
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención a la defensa de los
                      derechos de las mujeres. Capacitación para el trabajo.
                      Becas para madres adolescentes.
                      <br />
                      <strong>Teléfono:</strong> (998) 892 0033
                      <br />
                      <strong>Dirección:</strong> Av. Nader Sm 05 Lt 4-A, Núm.
                      Interior 101, Edificio Planta Baja, Col. Centro.C.P.
                      77500. Cancún Quintana Roo.
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
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> 983 834 2756 <br />
                      <strong>Dirección:</strong> Hospital Integral de Bacalar
                      Av. 3 por 24 C.P. 77930, Bacalar, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Centro Especializado para la Atencion a la Violencia (CEPAV)
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> (998)2110988 <br />
                      <strong>Teléfono:</strong> (998)2110988 <br />
                      <strong>Dirección:</strong> Gastón Alegre MZA 57 LTE 1,2 y
                      3, 236, 77527. Cancún. <br />
                      <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>Instituto Municipal de la Mujer</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> (998)88 68 537 <br />
                      <strong>Dirección:</strong> 247 Manzana 22 y 27 Avenida
                      los Tules Fraccionamiento Villas Otoch." <br />
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
                      denuncias por violencia familiar, sexual y de género.
                      <br />
                      <strong>Teléfono:</strong> 9988402236 <br />
                      <strong>Dirección:</strong> Av. Xcaret Mz. 3, Lt. 14,
                      Supermanzana 21, 77500 Cancún, Q. Roo. Sm 25, mz 22, lt 15
                      calle nance numero 19 cp 77500, Cancún, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* COZUMEL*/}
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h3>
                <strong>COZUMEL</strong>
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">
                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Secretaría de las Mujeres (Coordinación municipal
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención a la defensa de los
                      derechos de las mujeres. Capacitación para el trabajo.
                      Becas para madres adolescentes.
                      <br />
                      <strong>Teléfono:</strong> (998) 892 0033
                      <br />
                      <strong>Dirección:</strong> Av. Nader Sm 05 Lt 4-A, Núm.
                      Interior 101, Edificio Planta Baja, Col. Centro.C.P.
                      77500. Cancún Quintana Roo.
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
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> 983 834 2756 <br />
                      <strong>Dirección:</strong> Hospital Integral de Bacalar
                      Av. 3 por 24 C.P. 77930, Bacalar, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Centro Especializado para la Atencion a la Violencia (CEPAV)
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> (998)2110988 <br />
                      <strong>Teléfono:</strong> (998)2110988 <br />
                      <strong>Dirección:</strong> Gastón Alegre MZA 57 LTE 1,2 y
                      3, 236, 77527. Cancún. <br />
                      <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>Instituto Municipal de la Mujer</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> (998)88 68 537 <br />
                      <strong>Dirección:</strong> 247 Manzana 22 y 27 Avenida
                      los Tules Fraccionamiento Villas Otoch." <br />
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
                      denuncias por violencia familiar, sexual y de género.
                      <br />
                      <strong>Teléfono:</strong> 9988402236 <br />
                      <strong>Dirección:</strong> Av. Xcaret Mz. 3, Lt. 14,
                      Supermanzana 21, 77500 Cancún, Q. Roo. Sm 25, mz 22, lt 15
                      calle nance numero 19 cp 77500, Cancún, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* FELIPE CARRILLO PUERTO */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h3>
                <strong>FELIPE CARRILLO PUERTO</strong>
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">
                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Secretaría de las Mujeres (Coordinación municipal
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención a la defensa de los
                      derechos de las mujeres. Capacitación para el trabajo.
                      Becas para madres adolescentes.
                      <br />
                      <strong>Teléfono:</strong> (998) 892 0033
                      <br />
                      <strong>Dirección:</strong> Av. Nader Sm 05 Lt 4-A, Núm.
                      Interior 101, Edificio Planta Baja, Col. Centro.C.P.
                      77500. Cancún Quintana Roo.
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
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> 983 834 2756 <br />
                      <strong>Dirección:</strong> Hospital Integral de Bacalar
                      Av. 3 por 24 C.P. 77930, Bacalar, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Centro Especializado para la Atencion a la Violencia (CEPAV)
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> (998)2110988 <br />
                      <strong>Teléfono:</strong> (998)2110988 <br />
                      <strong>Dirección:</strong> Gastón Alegre MZA 57 LTE 1,2 y
                      3, 236, 77527. Cancún. <br />
                      <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>Instituto Municipal de la Mujer</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> (998)88 68 537 <br />
                      <strong>Dirección:</strong> 247 Manzana 22 y 27 Avenida
                      los Tules Fraccionamiento Villas Otoch." <br />
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
                      denuncias por violencia familiar, sexual y de género.
                      <br />
                      <strong>Teléfono:</strong> 9988402236 <br />
                      <strong>Dirección:</strong> Av. Xcaret Mz. 3, Lt. 14,
                      Supermanzana 21, 77500 Cancún, Q. Roo. Sm 25, mz 22, lt 15
                      calle nance numero 19 cp 77500, Cancún, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* ISLA MUJERES */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <h3>
                <strong>ISLA MUJERES</strong>
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">
                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Secretaría de las Mujeres (Coordinación municipal
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención a la defensa de los
                      derechos de las mujeres. Capacitación para el trabajo.
                      Becas para madres adolescentes.
                      <br />
                      <strong>Teléfono:</strong> (998) 892 0033
                      <br />
                      <strong>Dirección:</strong> Av. Nader Sm 05 Lt 4-A, Núm.
                      Interior 101, Edificio Planta Baja, Col. Centro.C.P.
                      77500. Cancún Quintana Roo.
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
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> 983 834 2756 <br />
                      <strong>Dirección:</strong> Hospital Integral de Bacalar
                      Av. 3 por 24 C.P. 77930, Bacalar, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Centro Especializado para la Atencion a la Violencia (CEPAV)
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> (998)2110988 <br />
                      <strong>Teléfono:</strong> (998)2110988 <br />
                      <strong>Dirección:</strong> Gastón Alegre MZA 57 LTE 1,2 y
                      3, 236, 77527. Cancún. <br />
                      <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>Instituto Municipal de la Mujer</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> (998)88 68 537 <br />
                      <strong>Dirección:</strong> 247 Manzana 22 y 27 Avenida
                      los Tules Fraccionamiento Villas Otoch." <br />
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
                      denuncias por violencia familiar, sexual y de género.
                      <br />
                      <strong>Teléfono:</strong> 9988402236 <br />
                      <strong>Dirección:</strong> Av. Xcaret Mz. 3, Lt. 14,
                      Supermanzana 21, 77500 Cancún, Q. Roo. Sm 25, mz 22, lt 15
                      calle nance numero 19 cp 77500, Cancún, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* JOSÉ MARIA MORELOS*/}
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <h3>
                <strong>JOSÉ MARIA MORELOS</strong>
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">
                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Secretaría de las Mujeres (Coordinación municipal
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención a la defensa de los
                      derechos de las mujeres. Capacitación para el trabajo.
                      Becas para madres adolescentes.
                      <br />
                      <strong>Teléfono:</strong> (998) 892 0033
                      <br />
                      <strong>Dirección:</strong> Av. Nader Sm 05 Lt 4-A, Núm.
                      Interior 101, Edificio Planta Baja, Col. Centro.C.P.
                      77500. Cancún Quintana Roo.
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
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> 983 834 2756 <br />
                      <strong>Dirección:</strong> Hospital Integral de Bacalar
                      Av. 3 por 24 C.P. 77930, Bacalar, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Centro Especializado para la Atencion a la Violencia (CEPAV)
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> (998)2110988 <br />
                      <strong>Teléfono:</strong> (998)2110988 <br />
                      <strong>Dirección:</strong> Gastón Alegre MZA 57 LTE 1,2 y
                      3, 236, 77527. Cancún. <br />
                      <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>Instituto Municipal de la Mujer</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> (998)88 68 537 <br />
                      <strong>Dirección:</strong> 247 Manzana 22 y 27 Avenida
                      los Tules Fraccionamiento Villas Otoch." <br />
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
                      denuncias por violencia familiar, sexual y de género.
                      <br />
                      <strong>Teléfono:</strong> 9988402236 <br />
                      <strong>Dirección:</strong> Av. Xcaret Mz. 3, Lt. 14,
                      Supermanzana 21, 77500 Cancún, Q. Roo. Sm 25, mz 22, lt 15
                      calle nance numero 19 cp 77500, Cancún, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* LÁZARO CÁRDENAS */}
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <h3>
                <strong>LÁZARO CARDENAS</strong>
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">
                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Secretaría de las Mujeres (Coordinación municipal
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención a la defensa de los
                      derechos de las mujeres. Capacitación para el trabajo.
                      Becas para madres adolescentes.
                      <br />
                      <strong>Teléfono:</strong> (998) 892 0033
                      <br />
                      <strong>Dirección:</strong> Av. Nader Sm 05 Lt 4-A, Núm.
                      Interior 101, Edificio Planta Baja, Col. Centro.C.P.
                      77500. Cancún Quintana Roo.
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
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> 983 834 2756 <br />
                      <strong>Dirección:</strong> Hospital Integral de Bacalar
                      Av. 3 por 24 C.P. 77930, Bacalar, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Centro Especializado para la Atencion a la Violencia (CEPAV)
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> (998)2110988 <br />
                      <strong>Teléfono:</strong> (998)2110988 <br />
                      <strong>Dirección:</strong> Gastón Alegre MZA 57 LTE 1,2 y
                      3, 236, 77527. Cancún. <br />
                      <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>Instituto Municipal de la Mujer</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> (998)88 68 537 <br />
                      <strong>Dirección:</strong> 247 Manzana 22 y 27 Avenida
                      los Tules Fraccionamiento Villas Otoch." <br />
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
                      denuncias por violencia familiar, sexual y de género.
                      <br />
                      <strong>Teléfono:</strong> 9988402236 <br />
                      <strong>Dirección:</strong> Av. Xcaret Mz. 3, Lt. 14,
                      Supermanzana 21, 77500 Cancún, Q. Roo. Sm 25, mz 22, lt 15
                      calle nance numero 19 cp 77500, Cancún, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* OTHÓN P.BLANCO*/}
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <h3>
                <strong>OTHÓN P.BLANCO</strong>
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">
                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Secretaría de las Mujeres (Coordinación municipal
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención a la defensa de los
                      derechos de las mujeres. Capacitación para el trabajo.
                      Becas para madres adolescentes.
                      <br />
                      <strong>Teléfono:</strong> (998) 892 0033
                      <br />
                      <strong>Dirección:</strong> Av. Nader Sm 05 Lt 4-A, Núm.
                      Interior 101, Edificio Planta Baja, Col. Centro.C.P.
                      77500. Cancún Quintana Roo.
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
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> 983 834 2756 <br />
                      <strong>Dirección:</strong> Hospital Integral de Bacalar
                      Av. 3 por 24 C.P. 77930, Bacalar, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Centro Especializado para la Atencion a la Violencia (CEPAV)
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> (998)2110988 <br />
                      <strong>Teléfono:</strong> (998)2110988 <br />
                      <strong>Dirección:</strong> Gastón Alegre MZA 57 LTE 1,2 y
                      3, 236, 77527. Cancún. <br />
                      <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>Instituto Municipal de la Mujer</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> (998)88 68 537 <br />
                      <strong>Dirección:</strong> 247 Manzana 22 y 27 Avenida
                      los Tules Fraccionamiento Villas Otoch." <br />
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
                      denuncias por violencia familiar, sexual y de género.
                      <br />
                      <strong>Teléfono:</strong> 9988402236 <br />
                      <strong>Dirección:</strong> Av. Xcaret Mz. 3, Lt. 14,
                      Supermanzana 21, 77500 Cancún, Q. Roo. Sm 25, mz 22, lt 15
                      calle nance numero 19 cp 77500, Cancún, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* PUERTO MORELOS*/}
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <h3>
                <strong>PUERTO MORELOS</strong>
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">
                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Secretaría de las Mujeres (Coordinación municipal
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención a la defensa de los
                      derechos de las mujeres. Capacitación para el trabajo.
                      Becas para madres adolescentes.
                      <br />
                      <strong>Teléfono:</strong> (998) 892 0033
                      <br />
                      <strong>Dirección:</strong> Av. Nader Sm 05 Lt 4-A, Núm.
                      Interior 101, Edificio Planta Baja, Col. Centro.C.P.
                      77500. Cancún Quintana Roo.
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
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> 983 834 2756 <br />
                      <strong>Dirección:</strong> Hospital Integral de Bacalar
                      Av. 3 por 24 C.P. 77930, Bacalar, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Centro Especializado para la Atencion a la Violencia (CEPAV)
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> (998)2110988 <br />
                      <strong>Teléfono:</strong> (998)2110988 <br />
                      <strong>Dirección:</strong> Gastón Alegre MZA 57 LTE 1,2 y
                      3, 236, 77527. Cancún. <br />
                      <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>Instituto Municipal de la Mujer</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> (998)88 68 537 <br />
                      <strong>Dirección:</strong> 247 Manzana 22 y 27 Avenida
                      los Tules Fraccionamiento Villas Otoch." <br />
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
                      denuncias por violencia familiar, sexual y de género.
                      <br />
                      <strong>Teléfono:</strong> 9988402236 <br />
                      <strong>Dirección:</strong> Av. Xcaret Mz. 3, Lt. 14,
                      Supermanzana 21, 77500 Cancún, Q. Roo. Sm 25, mz 22, lt 15
                      calle nance numero 19 cp 77500, Cancún, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>
              </div>
            </Accordion.Body>
          </Accordion.Item>


          {/* SOLIDARIDAD */}
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              <h3>
                <strong>SOLIDARIDAD</strong>
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">
                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Secretaría de las Mujeres (Coordinación municipal
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención a la defensa de los
                      derechos de las mujeres. Capacitación para el trabajo.
                      Becas para madres adolescentes.
                      <br />
                      <strong>Teléfono:</strong> (998) 892 0033
                      <br />
                      <strong>Dirección:</strong> Av. Nader Sm 05 Lt 4-A, Núm.
                      Interior 101, Edificio Planta Baja, Col. Centro.C.P.
                      77500. Cancún Quintana Roo.
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
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> 983 834 2756 <br />
                      <strong>Dirección:</strong> Hospital Integral de Bacalar
                      Av. 3 por 24 C.P. 77930, Bacalar, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Centro Especializado para la Atencion a la Violencia (CEPAV)
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> (998)2110988 <br />
                      <strong>Teléfono:</strong> (998)2110988 <br />
                      <strong>Dirección:</strong> Gastón Alegre MZA 57 LTE 1,2 y
                      3, 236, 77527. Cancún. <br />
                      <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>Instituto Municipal de la Mujer</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> (998)88 68 537 <br />
                      <strong>Dirección:</strong> 247 Manzana 22 y 27 Avenida
                      los Tules Fraccionamiento Villas Otoch." <br />
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
                      denuncias por violencia familiar, sexual y de género.
                      <br />
                      <strong>Teléfono:</strong> 9988402236 <br />
                      <strong>Dirección:</strong> Av. Xcaret Mz. 3, Lt. 14,
                      Supermanzana 21, 77500 Cancún, Q. Roo. Sm 25, mz 22, lt 15
                      calle nance numero 19 cp 77500, Cancún, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* TULUM */}
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              <h3>
                <strong>TULUM</strong>
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="p-4 d-flex flex-wrap justify-content-evenly gap-4 w-100">
                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Secretaría de las Mujeres (Coordinación municipal
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención a la defensa de los
                      derechos de las mujeres. Capacitación para el trabajo.
                      Becas para madres adolescentes.
                      <br />
                      <strong>Teléfono:</strong> (998) 892 0033
                      <br />
                      <strong>Dirección:</strong> Av. Nader Sm 05 Lt 4-A, Núm.
                      Interior 101, Edificio Planta Baja, Col. Centro.C.P.
                      77500. Cancún Quintana Roo.
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
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> 983 834 2756 <br />
                      <strong>Dirección:</strong> Hospital Integral de Bacalar
                      Av. 3 por 24 C.P. 77930, Bacalar, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>
                    Centro Especializado para la Atencion a la Violencia (CEPAV)
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> (998)2110988 <br />
                      <strong>Teléfono:</strong> (998)2110988 <br />
                      <strong>Dirección:</strong> Gastón Alegre MZA 57 LTE 1,2 y
                      3, 236, 77527. Cancún. <br />
                      <strong>Horario:</strong> lun-vie de 9 a 17 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "68rem" }}>
                  <Card.Header>Instituto Municipal de la Mujer</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Servicios:</strong> Atención médica y psicológica
                      de emergencia. <br />
                      <strong>Teléfono:</strong> (998)88 68 537 <br />
                      <strong>Dirección:</strong> 247 Manzana 22 y 27 Avenida
                      los Tules Fraccionamiento Villas Otoch." <br />
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
                      denuncias por violencia familiar, sexual y de género.
                      <br />
                      <strong>Teléfono:</strong> 9988402236 <br />
                      <strong>Dirección:</strong> Av. Xcaret Mz. 3, Lt. 14,
                      Supermanzana 21, 77500 Cancún, Q. Roo. Sm 25, mz 22, lt 15
                      calle nance numero 19 cp 77500, Cancún, Q. Roo <br />
                      <strong>Horario:</strong> lun-dom abierto las 24 hrs
                    </Card.Text>
                    <Button className="btn-gob">Ver mapa</Button>
                  </Card.Body>
                </Card>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          
        </Accordion>
      </Container>
    </Container>
  );
}
