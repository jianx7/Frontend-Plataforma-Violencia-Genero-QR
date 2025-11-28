import { useEffect, useState } from 'react';
import institucionService from '../../domain/services/institucionService';

export default function useInstituciones() {
  const [instituciones, setInstituciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await institucionService.obtenerInstituciones();
        setInstituciones(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { instituciones, loading, error };
}