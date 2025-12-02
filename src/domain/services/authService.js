// src/domain/services/authService.jsx
import axiosClient from '../../infrastructure/http/axiosClient';

/**
 * Servicio de autenticación
 * Conectado con FastAPI backend (sin endpoint /auth/me)
 */
const authService = {
  /**
   * Iniciar sesión
   * @param {Object} credentials - { email, password }
   * @returns {Promise} Datos del usuario y token
   */
  async login(credentials) {
    try {
      const response = await axiosClient.post('/auth/login', {
        correo_electronico: credentials.email,
        contrasena: credentials.password,
      });

      // Guardar tokens en localStorage
      if (response.access_token) {
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        localStorage.setItem('token_expires_in', response.expires_in);
      }

      // Decodificar el token JWT para obtener información del usuario
      const userData = this.getUserFromToken(response.access_token);
      
      // Enriquecer con el email del usuario
      userData.email = credentials.email;
      
      // Guardar en localStorage
      localStorage.setItem('user', JSON.stringify(userData));

      return {
        token: response.access_token,
        user: userData,
      };
    } catch (error) {
      console.error('Error en login:', error);
      
      // Manejar diferentes formatos de error del backend
      let errorMessage = 'Credenciales inválidas';
      
      if (error?.detail) {
        errorMessage = error.detail;
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      throw {
        message: errorMessage,
        detail: 'El correo o la contraseña son incorrectos',
      };
    }
  },

  /**
   * Decodificar token JWT para obtener información del usuario
   * @param {string} token - JWT token
   * @returns {Object} Datos del usuario extraídos del token
   */
  getUserFromToken(token) {
    try {
      // Decodificar el payload del JWT (parte del medio)
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(window.atob(base64));
      
      // El token contiene: sub (account_id), name (email), exp, iat
      // Según tu backend: subject=account_id, name=email
      
      return {
        id: payload.sub || null, // account_id
        nombre: payload.name || '', // Por ahora será el email
        email: payload.name || '', // El email viene en "name"
        rol_id: this.inferRoleFromToken(payload),
        rol: this.mapRoleName(this.inferRoleFromToken(payload)),
        tipo_usuario: this.mapRoleName(this.inferRoleFromToken(payload)),
        is_admin: this.inferRoleFromToken(payload) === 3,
      };
    } catch (error) {
      console.error('Error decodificando token:', error);
      return {
        id: null,
        nombre: '',
        email: '',
        rol_id: 1, // Por defecto denunciante
        rol: 'denunciante',
        tipo_usuario: 'denunciante',
        is_admin: false,
      };
    }
  },

  /**
   * Inferir rol del token (si está incluido) o del email
   * @param {Object} payload - Payload del JWT
   * @returns {number} ID del rol (1=denunciante, 2=orientador, 3=admin)
   */
  inferRoleFromToken(payload) {
    // Si el token incluye rol_id, usarlo
    if (payload.rol_id) {
      return payload.rol_id;
    }
    
    // Si el token incluye role, usarlo
    if (payload.role) {
      const roleMap = {
        'denunciante': 1,
        'orientador': 2,
        'admin': 3,
        'administrador': 3,
      };
      return roleMap[payload.role.toLowerCase()] || 1;
    }
    
    // Inferir por email (convención común)
    const email = payload.name || '';
    if (email.includes('@admin.') || email.includes('admin@')) {
      return 3; // Admin
    }
    if (email.includes('@orientador.') || email.includes('orientador@')) {
      return 2; // Orientador
    }
    
    // Por defecto: denunciante
    return 1;
  },

  /**
   * Mapear rol_id a nombre legible
   * @param {number} rolId - ID del rol
   * @returns {string} Nombre del rol
   */
  mapRoleName(rolId) {
    const roles = {
      1: 'denunciante',
      2: 'orientador',
      3: 'admin',
    };
    return roles[rolId] || 'denunciante';
  },

  /**
   * Registrar nuevo usuario (denunciante)
   * @param {Object} userData - { nombre, email, password, confirmPassword }
   * @returns {Promise} Datos del usuario registrado
   */
  async register(userData) {
    try {
      const response = await axiosClient.post('/auth/register/denunciante', {
        nombre: userData.nombre,
        correo_electronico: userData.email,
        contrasena: userData.password,
        confirmar_contrasena: userData.confirmPassword,
      });

      return {
        success: true,
        message: 'Usuario registrado exitosamente',
        data: response,
      };
    } catch (error) {
      console.error('Error en registro:', error);
      
      let errorMessage = 'Error al registrar usuario';
      
      if (error?.detail) {
        errorMessage = error.detail;
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      // Verificar si es error de correo duplicado
      if (errorMessage.toLowerCase().includes('correo') && 
          errorMessage.toLowerCase().includes('registrado')) {
        errorMessage = 'Este correo electrónico ya está registrado';
      }
      
      throw {
        message: errorMessage,
        detail: errorMessage,
      };
    }
  },

  /**
   * Cerrar sesión
   */
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('token_expires_in');
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

    // Verificar por rol_id (3 = admin)
    if (user.rol_id === 3) return true;

    // Verificar por múltiples campos como fallback
    return (
      user.rol === 'admin' ||
      user.rol === 'administrador' ||
      user.tipo_usuario === 'admin' ||
      user.tipo_usuario === 'administrador' ||
      user.is_admin === true
    );
  },

  /**
   * Verificar si el usuario es orientador
   * @returns {boolean}
   */
  isOrientador() {
    const user = this.getCurrentUser();
    if (!user) return false;
    return user.rol_id === 2 || user.rol === 'orientador';
  },

  /**
   * Obtener token actual
   * @returns {string|null}
   */
  getToken() {
    return localStorage.getItem('token');
  },

  /**
   * Cambiar contraseña
   * @param {Object} passwordData - { contrasena_actual, nueva_contrasena, confirmar_contrasena }
   * @returns {Promise}
   */
  async changePassword(passwordData) {
    try {
      const response = await axiosClient.post('/auth/change-password', {
        contrasena_actual: passwordData.contrasena_actual,
        nueva_contrasena: passwordData.nueva_contrasena,
        confirmar_contrasena: passwordData.confirmar_contrasena,
      });

      return {
        success: true,
        message: response.message || 'Contraseña actualizada correctamente',
      };
    } catch (error) {
      console.error('Error al cambiar contraseña:', error);
      
      let errorMessage = 'Error al cambiar la contraseña';
      
      if (error?.detail) {
        errorMessage = error.detail;
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      throw {
        message: errorMessage,
      };
    }
  },

  /**
   * Refrescar información del usuario desde el token actual
   * Útil si el token fue renovado
   */
  refreshUserInfo() {
    const token = this.getToken();
    if (token) {
      const userData = this.getUserFromToken(token);
      const currentUser = this.getCurrentUser();
      
      // Mantener el email si ya lo tenemos
      if (currentUser?.email) {
        userData.email = currentUser.email;
      }
      
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    }
    return null;
  },
};

export default authService;