import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./app/routes";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}
