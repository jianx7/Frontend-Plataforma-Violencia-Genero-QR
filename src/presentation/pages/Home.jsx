import { useNavigate } from "react-router-dom";

export default function Home() {
<<<<<<< HEAD
  
}
=======
  const navigate = useNavigate();

  return (
    <body className="bienvenida fondo-home text-center">
      <section>
      <h1 className="mb-4">
        Bienvenida a la Plataforma Digital Contra la Violencia de Género en Quintana Roo
      </h1>
      <p className="mb-5">
        Empieza Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptatum rem reiciendis. Quibusdam, rem voluptatem?
      </p>

      <button
        type="button"
        className="btn-gob mx-auto"
        onClick={() => navigate("/register")}
      >
        Ingresar
      </button>
      </section>
    </body>
  );
}
>>>>>>> 36d4697a75192a339bcd82340d11b787cb5d866c
