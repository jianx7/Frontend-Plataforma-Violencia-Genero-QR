import { Routes, Route } from "react-router-dom";
import Home from "../presentation/pages/Home";
import Login from "../presentation/pages/Login";
import Register from "../presentation/pages/Register";
import Layout from "../presentation/pages/Layout";
import UserInfo from "../presentation/pages/UserInfo";
import Security from "../presentation/pages/Security";
import Logout from "../presentation/pages/Logout";
import Directorio from "../presentation/pages/Directorio";
import Instancias from "../presentation/pages/Instancias";
import Derechos from "../presentation/pages/Derechos";
import DashboardAdmin from "../presentation/pages/DashboardAdmin";
import AdminLayout from "../presentation/pages/AdminLayout";

export default function RoutesApp() {
  return (
    /* Con Layout*/
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/security" element={<Security />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/instancias" element={<Instancias />} />
        <Route path="/derechos" element={<Derechos />} />
      </Route>

      {/* Rutas de administrador */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<DashboardAdmin />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
