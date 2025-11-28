import { useState } from "react";
import mapsService from "../../domain/services/mapsService";

export default function useMapa() {
  const [link, setLink] = useState(null);

  const generarLink = async (address) => {
    const url = await mapsService.obtenerLinkMapa(address);
    setLink(url);
  };

  return { link, generarLink };
}