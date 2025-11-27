import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./app/context/AuthContext";
import RoutesApp from "./app/routes";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  );
}