import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./app/routes";

export default function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}
