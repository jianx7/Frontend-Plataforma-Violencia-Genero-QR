import { Container, Button, Card} from "react-bootstrap";

export default function Instancias() {
  const pdfUrl = "https://ordenjuridico.gob.mx/violenciagenero/LEY%20OLIMPIA.pdf";
  return (
     <Container className="min-vh-100 pb-5 py-5 d-flex flex-column align-items-center justify-content-start">
      <h2><strong>VIOLENCIA DIGITAL</strong></h2>
      <Card className="shadow-sm cartilla mt-1 mb-5">
        <Card.Img
          variant="top"
          src='../src/presentation/assets/ley-olimpia-vd.jpg' 
          
        />
        <Card.Body>
          <Card.Title>Ley Olimpia</Card.Title>
          <Card.Text>
            Reforma penal que tipifica la violencia digital y la difusión no consentida de contenido íntimo.
          </Card.Text>

          <Button
            variant="primary"
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center gap-2 btn-gob"
          >
             Abrir documento
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
