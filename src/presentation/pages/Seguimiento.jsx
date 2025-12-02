import { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Spinner } from "react-bootstrap";
import obtenerOrientador from "../utils/getOrientador";

export default function Seguimiento() {
  const [folio, setFolio] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const orientadores = [
    { nombre: "Lic. Gabriela Pérez Torres", correo: "gabriela.perez@fgeqroo.gob.mx" },
    { nombre: "Lic. María Sánchez Ortiz", correo: "maria.sanchez@fgeqroo.gob.mx" },
    { nombre: "Lic. Juan Carlos Medina", correo: "juan.medina@fgeqroo.gob.mx" },
    { nombre: "Lic. Patricia Gómez Ruiz", correo: "patricia.gomez@fgeqroo.gob.mx" },
    { nombre: "Lic. Fernando Herrera López", correo: "fernando.herrera@fgeqroo.gob.mx" },
    { nombre: "Lic. Daniela Rivas Montoya", correo: "daniela.rivas@fgeqroo.gob.mx" }
  ];

  const buscarFolio = async () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      const orientador = obtenerOrientador(orientadores);

      setResultado({
        orientador,
        fecha: "03/12/2025",
        estado: "Enviada",
        descripcion: "En proceso de atención y denuncia",
      });

      setLoading(false);
    }, 800);
  };

  return (
    <Container className="mt-4">
      <h2 className="fw-bold">Seguimiento</h2>

      <p className="mt-3">
        <strong className="fs-5">¿Qué es el Seguimiento?</strong><br />
        Es el mecanismo que permite a las víctimas conocer a detalle la atención
        que se ha brindado a las denuncias ciudadanas  presentadas
        a través de nuestra Plataforma.
      </p>

      <hr />

      <h4 className="fw-semibold my-4">Datos del folio a consultar</h4>

      <Row className="gy-3">
        {/* Campo Folio */}
        <Col md={12} className="d-flex flex-row mb-4">

          <Form.Label className="d-flex justify-content-center">Folio: </Form.Label>
          <Form.Control
            type="text"
            placeholder="No. Folio"
            value={folio}
            onChange={(e) => setFolio(e.target.value)}
            required
            className="d-flex justify-content-center mx-3"
          />

          {/* Botón de busqueda */}
          <Button
            variant="danger"
            type="submit"
            className="btn btn-primary"
            onClick={buscarFolio}
            //disabled={loading}
          >
            {loading ? <Spinner animation="border" variant="light" size="sm" /> : "Buscar"}
          </Button>
        </Col>

        <Col xs={12} className="my-3">
          {/* Mostrar error */}
          {error && <p className="text-danger mt-3">{error}</p>}

          {/* Mostrar datos si existen */}
          {resultado && (
            <Card className="mt-3">
              <Card.Body>
                <h5 className="mb-3">Información de la denuncia</h5>

                <p>
                  <strong>Nombre del orientador:</strong> {resultado.orientador?.nombre}
                </p>
                <p>
                  <strong>Correo de contacto:</strong> {resultado.orientador?.correo}
                </p>

                <p><strong>Fecha:</strong> {resultado.fecha}</p>
                <p><strong>Estado:</strong> {resultado.estado}</p>
                <p><strong>Descripción:</strong> {resultado.descripcion}</p>
              </Card.Body>
            </Card>

          )}
        </Col>
      </Row>
    </Container >
  );
}
