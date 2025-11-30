import { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Spinner } from "react-bootstrap";

export default function Seguimiento() {
  const [folio, setFolio] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const buscarFolio = async () => {
    setLoading(true);
    setError("");
    //setResultado(null);
    setResultado(true)
    {/*try {
      //const response = await fetch(`https://tu-api.com/folios/${folio}`);
      console.log("Buscando ")

      if (!response.ok) {
        throw new Error("Folio no encontrado");
      }

      //const data = await response.json();
      //setResultado(data); // Guardas los datos
      setResultado("")
    } catch (err) {
      setError(err.message);
    }*/}

    setLoading(false);
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
            placeholder="Ejemplo: A123"
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
            disabled={loading}
          >
            {loading ? <Spinner size="sm" /> : "Buscar"}
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
                <p><strong>Nombre del orientador:</strong> Lic. Gabriela Pérez Torres{resultado.nombre}</p>
                <p><strong>Fecha:</strong> 01/12/2025{resultado.fecha}</p>
                <p><strong>Estado:</strong> Enviada {resultado.estado}</p>
                <p><strong>Correo de contacto:</strong> fgeqroo@fgeqroo.gob.mx</p>
                <p><strong>Descripción:</strong> En proceso de atención y denuncia{resultado.descripcion}</p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container >
  );
}
