import axiosClient from '../../infrastructure/http/axiosClient';

/**
 * Servicio de autenticación
 * Maneja login, registro, logout y validación de sesión
 */
const authService = {
  /**
   * Iniciar sesión
   * @param {Object} credentials - { correo_electronico, contrasena }
   * @returns {Promise} Datos del usuario y token
   */
  async login(credentials) {
    const response = await axiosClient.post('/auth/login', {
      correo_electronico: credentials.email,
      contrasena: credentials.password,
    });
    
    // El backend devuelve: access_token, token_type, expires_in, refresh_token
    if (response.access_token) {
      localStorage.setItem('token', response.access_token);
      localStorage.setItem('refresh_token', response.refresh_token);
      localStorage.setItem('token_expires_in', response.expires_in);
    }
    
    // Guardar el email del usuario desde el token (por ahora)
    // TODO: Hacer petición adicional para obtener datos completos del usuario
    if (credentials.email) {
      const userData = {
        email: credentials.email,
        // El backend no devuelve info completa del usuario en login
        // Necesitarás un endpoint como /auth/me para obtener datos completos
      };
      localStorage.setItem('user', JSON.stringify(userData));
    }
    
    return {
      token: response.access_token,
      user: { email: credentials.email },
    };
  },

  /**
   * Registrar nuevo usuario (denunciante)
   * @param {Object} userData - { nombre, email, password, confirmPassword }
   * @returns {Promise} Datos del usuario registrado
   */
  async register(userData) {
    const response = await axiosClient.post('/auth/register/denunciante', {
      nombre: userData.nombre,
      correo_electronico: userData.email,
      contrasena: userData.password,
      confirmar_contrasena: userData.confirmPassword,
    });
    
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