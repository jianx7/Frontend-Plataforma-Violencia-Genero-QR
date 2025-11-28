import { Container, Spinner, Alert } from 'react-bootstrap';
import useInstituciones from '../hooks/useInstituciones';
import InstitucionCard from '../components/InstitucionCard';

export default function Directorio() {
  const { instituciones, loading, error } = useInstituciones();

  if (loading) {
    return (
      <Container className="p-5 text-center">
        <Spinner animation="border" variant="danger" />
        <p className="mt-3">Cargando instituciones...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="p-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="p-5 faq-accordion">
      <h2><strong>Directorio</strong></h2>
      <div className="d-flex flex-wrap gap-4 mt-4">
        {instituciones.map(inst => (
          <InstitucionCard key={inst.id} institucion={inst} />
        ))}
      </div>
    </Container>
  );
}