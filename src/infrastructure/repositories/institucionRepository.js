import institucionesData from '../data/instituciones.json';
import Institucion from '../../domain/models/institucion.model';

const institucionRepository = {
  async getAll() {
    return institucionesData.instituciones.map(inst => new Institucion(inst));
  }
};

export default institucionRepository;