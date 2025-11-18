import { Table, Button } from "react-bootstrap";

export default function RecentCases() {
  return (
    <div className="recent-table shadow-sm p-4 bg-white rounded">
      <h4 className="fw-bold mb-3">
        Casos recientes
      </h4>
      <Table hover responsive>
        <thead>
          <tr>
            <th>Folio</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>A120</td>
            <td>Física</td>
            <td>Nuevo</td>
            <td>Hoy</td>
            <td>
              <Button variant="outline-primary" size="sm">
                Ver
              </Button>
            </td>
          </tr>

          <tr>
            <td>A121</td>
            <td>Psicológica</td>
            <td>Proceso</td>
            <td>Ayer</td>
            <td>
              <Button variant="outline-primary" size="sm">
                Ver
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
