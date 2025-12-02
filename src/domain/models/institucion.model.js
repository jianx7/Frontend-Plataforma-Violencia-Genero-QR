export default class Institucion {
  constructor(data) {
    this.id = data.id;
    this.nombre = data.nombre_institucion;
    this.acronimo = data.acronimo;
    this.descripcion = data.descripcion_inst;
    this.direccion = data.direccion;
    this.coordenadas = data.coordenadas;
    this.telefono = data.telefono_contacto;
    this.correo = data.correo_contacto;
    this.estado = data.estado_instituto;
    this.horario = data.horario;
  }
}