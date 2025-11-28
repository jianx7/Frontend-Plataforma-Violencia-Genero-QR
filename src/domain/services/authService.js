import axiosClient from '../../infrastructure/http/axiosClient';

// Modo de desarrollo: usar autenticación mock
const USE_MOCK_AUTH = true;

// Usuarios de prueba
const MOCK_USERS = {
  admin: {
    email: 'admin@test.com',
    password: 'admin123',
    userData: {
      id: 1,
      nombre: 'Administrador',
      email: 'admin@test.com',
      rol: 'admin',
      tipo_usuario: 'administrador',
      is_admin: true,
    },
  },
  user: {
    email: 'usuario@test.com',
    password: 'user123',
    userData: {
      id: 2,
      nombre: 'Usuario Normal',
      email: 'usuario@test.com',
      rol: 'denunciante',
      tipo_usuario: 'denunciante',
      is_admin: false,
    },
  },
};

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
    // MODO MOCK: Autenticación local sin backend
    if (USE_MOCK_AUTH) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Verificar credenciales contra usuarios mock
          const mockUser = Object.values(MOCK_USERS).find(
            (u) => u.email === credentials.email && u.password === credentials.password
          );

          if (mockUser) {
            // Generar token mock
            const mockToken = `mock_token_${Date.now()}`;
            const mockRefreshToken = `mock_refresh_${Date.now()}`;

            // Guardar en localStorage
            localStorage.setItem('token', mockToken);
            localStorage.setItem('refresh_token', mockRefreshToken);
            localStorage.setItem('token_expires_in', '3600');
            localStorage.setItem('user', JSON.stringify(mockUser.userData));

            resolve({
              token: mockToken,
              user: mockUser.userData,
            });
          } else {
            reject({
              message: 'Credenciales inválidas',
              detail: 'El correo o la contraseña son incorrectos',
            });
          }
        }, 500); // Simular latencia de red
      });
    }

    // MODO REAL: Conectar con backend
    const response = await axiosClient.post('/auth/login', {
      correo_electronico: credentials.email,
      contrasena: credentials.password,
    });
    
    if (response.access_token) {
      localStorage.setItem('token', response.access_token);
      localStorage.setItem('refresh_token', response.refresh_token);
      localStorage.setItem('token_expires_in', response.expires_in);
    }
    
    if (credentials.email) {
      const userData = {
        email: credentials.email,
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
    // MODO MOCK: Registro simulado
    if (USE_MOCK_AUTH) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Validar que las contraseñas coincidan
          if (userData.password !== userData.confirmPassword) {
            reject({
              message: 'Las contraseñas no coinciden',
            });
            return;
          }

          // Simular registro exitoso
          resolve({
            message: 'Usuario registrado exitosamente',
            user: {
              nombre: userData.nombre,
              email: userData.email,
            },
          });
        }, 500);
      });
    }

    // MODO REAL: Conectar con backend
    const response = await axiosClient.post('/auth/register/denunciante', {
      nombre: userData.nombre,
      correo_electronico: userData.email,
      contrasena: userData.password,
      confirmar_contrasena: userData.confirmPassword,
    });
    
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
    
    // Verificar múltiples campos para identificar admin
    return (
      user.rol === 'admin' ||
      user.rol === 'administrador' ||
      user.tipo_usuario === 'admin' ||
      user.tipo_usuario === 'administrador' ||
      user.tipo_usuario === 'encargado' ||
      user.is_admin === true ||
      (user.email && user.email.includes('@admin.'))
    );
  },

  /**
   * Obtener token actual
   * @returns {string|null}
   */
  getToken() {
    return localStorage.getItem('token');
  },

  /**
   * Obtener usuarios mock para desarrollo
   * @returns {Object} Usuarios de prueba
   */
  getMockUsers() {
    if (USE_MOCK_AUTH) {
      return {
        admin: {
          email: MOCK_USERS.admin.email,
          password: MOCK_USERS.admin.password,
        },
        user: {
          email: MOCK_USERS.user.email,
          password: MOCK_USERS.user.password,
        },
      };
    }
    return null;
  },
};

export default authService;