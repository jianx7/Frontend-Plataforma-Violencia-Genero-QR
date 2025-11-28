
export const MOCK_CASOS = [
  {
    folio: "A120",
    tipo: "Física",
    estado: "Nuevo",
    fecha: "2025-11-18",
    victima: { nombre: "Ana Pérez", alias: "ana123", telefono: "998xxxxxxx" },
    relato: "Relato breve del incidente A120...",
    documentos: [
      { id: 1, nombre: "INE.pdf", url: "" },
      { id: 2, nombre: "Foto1.jpg", url: "" }
    ],
    citas: []
  },
  {
    folio: "A121",
    tipo: "Psicológica",
    estado: "Proceso",
    fecha: "2025-11-17",
    victima: { nombre: "María López", alias: "mlopez", telefono: "999xxxxxxx" },
    relato: "Relato breve del incidente A121...",
    documentos: [],
    citas: [{ fecha: "2025-11-20", hora: "11:00" }]
  }
];
