import { Routes, Route } from "react-router-dom";
import Home from "../presentation/pages/Home";
import Login from "../presentation/pages/Login";
import Register from "../presentation/pages/Register";
import Layout from "../presentation/pages/Layout"
import UserInfo from "../presentation/pages/UserInfo";
import DeleteAccount from "../presentation/pages/DeleteAccount"
import Security from "../presentation/pages/Security"
import Logout from "../presentation/pages/Logout"

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="" element={<Layout/>}>
      <Route path="/" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user-info" element={<UserInfo />} />
      <Route path="/security" element={<Security />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/logout" element={<Logout />} />
      
    </Routes>
  );
}
