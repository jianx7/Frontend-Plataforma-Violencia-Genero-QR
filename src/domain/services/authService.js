import axiosClient from '../../infrastructure/http/axiosClient';

/**
 * Servicio de autenticación
 * Maneja login, registro, logout y validación de sesión
 */
const authService = {
  /**
   * Iniciar sesión
   * @param {Object} credentials - { email, password }
   * @returns {Promise} Datos del usuario y token
   */
  async login(credentials) {
    const response = await axiosClient.post('/auth/login', credentials);
    
    // Guardar token y datos de usuario en localStorage
    if (response.token) {
      localStorage.setItem('token', response.token);
    }
    
    if (response.user) {
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    
    return response;
  },

  /**
   * Registrar nuevo usuario
   * @param {Object} userData - { nombre, email, password }
   * @returns {Promise} Datos del usuario registrado
   */
  async register(userData) {
    const response = await axiosClient.post('/auth/register', userData);
    
    // Si el registro incluye auto-login, guardar token
    if (response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    
    return response;
  },

  /**
   * Cerrar sesión
   */
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  },

  /**
   * Obtener usuario actual desde localStorage
   * @returns {Object|null} Datos del usuario o null
   */
  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (error) {
        console.error('Error al parsear usuario:', error);
        return null;
      }
    }
    return null;
  },

  /**
   * Verificar si hay una sesión activa
   * @returns {boolean}
   */
  isAuthenticated() {
    const token = localStorage.getItem('token');
    const user = this.getCurrentUser();
    return !!token && !!user;
  },

  /**
   * Verificar si el usuario es administrador
   * @returns {boolean}
   */
  isAdmin() {
    const user = this.getCurrentUser();
    if (!user) return false;
    
    // Ajustar según cómo el backend identifica admins
    // Opción 1: Por campo 'rol'
    if (user.rol === 'admin' || user.rol === 'administrador') {
      return true;
    }
    
    // Opción 2: Por campo 'tipo_usuario'
    if (user.tipo_usuario === 'admin' || user.tipo_usuario === 'encargado') {
      return true;
    }
    
    // Opción 3: Por dominio de email
    if (user.email && user.email.includes('@admin.')) {
      return true;
    }
    
    // Opción 4: Por campo booleano 'is_admin'
    if (user.is_admin === true) {
      return true;
    }
    
    return false;
  },

  /**
   * Obtener token actual
   * @returns {string|null}
   */
  getToken() {
    return localStorage.getItem('token');
  },
};

export default authService;