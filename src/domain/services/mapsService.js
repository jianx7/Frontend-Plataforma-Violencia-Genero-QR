import mapsRepository from "../../infrastructure/repositories/mapsRepository";

const mapsService = {
  async obtenerLinkMapa(address) {
    return await mapsRepository.getLink(address);
  }
};

export default mapsService;