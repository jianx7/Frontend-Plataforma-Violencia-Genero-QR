import { Routes, Route } from "react-router-dom";
import Home from "../presentation/pages/Home";
import Login from "../presentation/pages/Login";
import Register from "../presentation/pages/Register";
import Layout from "../presentation/pages/Layout"
import Chatbot from "../presentation/pages/Chatbot";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="" element={<Layout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/chatbot" element={<Chatbot />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
