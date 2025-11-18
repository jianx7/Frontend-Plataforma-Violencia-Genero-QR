import { Button, Container, Card } from "react-bootstrap";


export default function Derechos() {
  const pdfUrl = "https://www.cartilladerechosdelasmujeres.gob.mx/pdf/Cartilla_de_Derechos_de_las_Mujeres.pdf";

  return (
    <Container className="min-vh-100 py-5 d-flex flex-column align-items-center justify-content-start">
      <h2><strong>CONOCE TUS DERECHOS</strong></h2>
      <Card className="shadow-sm cartilla mb-5">
        <Card.Img
          variant="top"
          src='../src/presentation/assets/cartilla.png' 
          
        />
        <Card.Body>
          <Card.Title>Cartilla de Derechos de las Mujeres</Card.Title>
          <Card.Text>
            Documento oficial con los derechos fundamentales de las mujeres en México.
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
