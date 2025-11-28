import institucionRepository from '../../infrastructure/repositories/institucionRepository';

const institucionService = {
  async obtenerInstituciones() {
    return await institucionRepository.getAll();
  }
};

export default institucionService;