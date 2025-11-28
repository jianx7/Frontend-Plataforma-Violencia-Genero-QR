import React from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MOCK_CASOS } from "../../../infrastructure/mocks/casos"; 

export default function RecentCases() {
  const navigate = useNavigate();

  const handleVer = (caso) => {
    // navega a /encargado/caso/A120 y pasa el objeto caso por state
    navigate(`/admin/folio/${caso.folio}`, { state: { caso } });
  };

  return (
    <div className="recent-table shadow-sm p-4 bg-white rounded">
      <h4 className="fw-bold mb-3">Casos recientes</h4>

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
          {MOCK_CASOS.map((c) => (
            <tr key={c.folio}>
              <td>{c.folio}</td>
              <td>{c.tipo}</td>
              <td>{c.estado}</td>
              <td>{c.fecha}</td>
              <td>
                <Button variant="outline-primary" size="sm" onClick={() => handleVer(c)}>
                  Ver
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
