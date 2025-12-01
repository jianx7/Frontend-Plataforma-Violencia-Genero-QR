import { Routes, Route } from "react-router-dom";
import Home from "../presentation/pages/Home";
import Login from "../presentation/pages/Login";
import Register from "../presentation/pages/Register";
import Layout from "../presentation/pages/Layout";
import Chatbot from "../presentation/pages/Chatbot";
import Predenuncia from "../presentation/pages/Predenuncia";
import UserInfo from "../presentation/pages/UserInfo";
import Security from "../presentation/pages/Security";
import Directorio from "../presentation/pages/Directorio";
import Instancias from "../presentation/pages/Instancias";
import Derechos from "../presentation/pages/Derechos";
import DashboardAdmin from "../presentation/pages/DashboardAdmin";
import AdminLayout from "../presentation/pages/AdminLayout";
import Seguimiento from "../presentation/pages/Seguimiento";
import DetalleCaso from "../presentation/components/admin-view/DetalleCaso";
import MisCasos from "../presentation/pages/MisCasos";
import Agenda from "../presentation/pages/Agenda";
import PrivateRoute from "../presentation/components/PrivateRoute";
import PublicRoute from "../presentation/components/PublicRoute";

export default function RoutesApp() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login"element={<PublicRoute> <Login /> </PublicRoute>}/>
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>}/>


      {/* Rutas protegidas de usuario normal */}
      <Route
        path=""
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Home />} />

        {/* resto de páginas para users */}
        <Route path="/predenuncia" element={<Predenuncia />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/instancias" element={<Instancias />} />
        <Route path="/derechos" element={<Derechos />} />

        {/* PERFIL USUARIO */}
        <Route path="perfil/user-info" element={<UserInfo />} />
        <Route path="perfil/security" element={<Security />} />
      </Route>

      {/* Rutas protegidas de administrador */}
      <Route
        path="/admin"
        element={
          <PrivateRoute requireAdmin={true}>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<DashboardAdmin />} />
        <Route path="casos" element={<MisCasos />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="folio/:folio" element={<DetalleCaso />} />
      </Route>
    </Routes>
  );
}
