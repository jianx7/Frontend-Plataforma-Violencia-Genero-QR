import { Navigate } from 'react-router-dom';
import { useAuth } from '../../app/context/AuthContext';

/**
 * Componente para proteger rutas que requieren autenticación
 */
export default function PrivateRoute({ children, requireAdmin = false }) {
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

  // Si no está autenticado, redirigir al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Si requiere ser admin y no lo es, redirigir al home
  if (requireAdmin && !isAdmin()) {
    return <Navigate to="/" replace />;
  }

  // Si todo está bien, mostrar el componente
  return children;
}