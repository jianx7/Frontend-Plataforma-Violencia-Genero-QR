import axios from "axios";

const API_URL = "http://localhost:8000/maps";

const mapsRepository = {
  async getLink(address) {
    const response = await axios.post(`${API_URL}/link`, { address });
    return response.data.google_maps_link;
  }
};

export default mapsRepository;