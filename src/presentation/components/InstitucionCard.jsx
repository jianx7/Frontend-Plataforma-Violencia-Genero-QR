import mapsService from "../../domain/services/mapsService";

export default function InstitucionCard({ institucion }) {
  const handleVerMapa = async () => {
    try {
      const url = await mapsService.obtenerLinkMapa(institucion.direccion);
      window.open(url, "_blank"); // abre Google Maps en nueva pestaña
    } catch (error) {
      console.error("Error al generar el link de mapa:", error);
    }
  };

  return (
    <div className="card p-3">
      <h4>{institucion.nombre} ({institucion.acronimo})</h4>
      <p>{institucion.descripcion}</p>
      <p><strong>Dirección:</strong> {institucion.direccion}</p>
      <p><strong>Teléfono:</strong> {institucion.telefono}</p>
      <p><strong>Correo:</strong> {institucion.correo}</p>

      <button className="btn btn-primary mt-2" onClick={handleVerMapa}>
        Ver mapa
      </button>
    </div>
  );
}