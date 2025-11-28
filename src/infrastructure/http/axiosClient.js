import axios from 'axios';

// URL base de la API
const API_URL = 'http://localhost:8000';

// Crear instancia de axios con configuración base
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 segundos
});

// Interceptor para agregar token a todas las peticiones
axiosClient.interceptors.request.use(
  (config) => {
    // Obtener token del localStorage
    const token = localStorage.getItem('token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar respuestas y errores
axiosClient.interceptors.response.use(
  (response) => {
    // Retornar solo la data de la respuesta
    return response.data;
  },
  (error) => {
    // Manejo de errores comunes
    if (error.response) {
      // El servidor respondió con un status code fuera del rango 2xx
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          // Token inválido o expirado
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.href = '/login';
          break;
        case 403:
          console.error('Acceso denegado');
          break;
        case 404:
          console.error('Recurso no encontrado');
          break;
        case 500:
          console.error('Error del servidor');
          break;
        default:
          console.error('Error:', data?.message || 'Ocurrió un error');
      }
      
      return Promise.reject(data);
    } else if (error.request) {
      // La petición se hizo pero no hubo respuesta
      console.error('No se pudo conectar con el servidor');
      return Promise.reject({ message: 'Error de conexión' });
    } else {
      // Algo pasó al configurar la petición
      console.error('Error:', error.message);
      return Promise.reject({ message: error.message });
    }
  }
);

export default axiosClient;