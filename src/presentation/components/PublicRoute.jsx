import { Navigate } from 'react-router-dom';
import { useAuth } from '../../app/context/AuthContext';

/**
 * Componente para rutas públicas (Login/Register)
 * Si el usuario ya está autenticado, redirige según su rol
 */
export default function PublicRoute({ children }) {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  // Mostrar loading mientras verifica la sesión
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  // Si ya está autenticado, redirigir según rol
  if (isAuthenticated) {
    // Si es admin, va al dashboard
    if (isAdmin()) {
      return <Navigate to="/admin/dashboard" replace />;
    }
    // Si es usuario normal, va al home
    return <Navigate to="/" replace />;
  }

  // Si no está autenticado, mostrar la página pública
  return children;
}
