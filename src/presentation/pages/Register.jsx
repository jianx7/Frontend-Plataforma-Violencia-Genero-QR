export default function Register() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Crear cuenta</title>
        <link
          href="https://framework-gb.cdn.gob.mx/gm/v3/assets/styles/main.css"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <main>
          {/* Panel de bienvenida */}
          <section>
            <header>
              <img src="" alt="LOGO" />
            </header>

            <h1>¡Bienvenida!</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              reiciendis ut numquam? Laudantium asperiores provident iusto,
              maxime, dolor esse totam ab, expedita aut eligendi id alias.
            </p>

            <article>
              <img src="" alt="Imagen-visual" />
            </article>
          </section>

          {/* Panel de registro*/}
          <section>
            <h2>Crea tu cuenta</h2>
            <p>
              Ingresa los siguientes datos para iniciar el proceso de registro:
            </p>
            {/* Formulario */}
            <form role="form">

              <div class="form-group">
                <label class="control-label" for="file-01">
                  Escane tu INE para confirmar tu identidad
                  <input id="file-01"
                    type="file"
                    accept="pdf/*"
                    placeholder="Escanear INE"
                  />
                </label>
              </div>

              <div class="form-group">
              <label class="control-label">
                Apellidos
                <input type="text" placeholder="Escribe tus apellidos" />
              </label>
              </div>

              <div class="form-group">
              <label class="control-label">
                Nombre
                <input type="text" placeholder="Escribe tu nombre" />
              </label>
              </div>

              <div class="form-group">
              <label class="control-label">
                Fecha de nacimiento
                <input type="date" />
              </label>
              </div>

              <div class="form-group">
              <label class="control-label" for="email-01">
                E-mail o número telefónico
              </label>
              <input class="form-control" id="email-01"
                  type="email"
                  placeholder="Escribe tu e-mail o tu correo electrónico"
                />
              </div>

              <div class="form-group">
              <label>
                Contraseña
                <input type="password" placeholder="Escribe tu contraseña" />
              </label>
              <small>
                Debe tener al menos 9 caracteres, una mayúscula y un carácter
                especial (*@_).
              </small>
              </div>

              <div class="form-group">
                <input type="checkbox" id="terms" />
                <label>
                  Acepto los <a href="#">Términos y condiciones</a> y la{" "}
                  <a href="#">Política de privacidad</a>.
                </label>
              </div>

              <button type="submit">Registrarse</button>

              <p className="login-link">
                ¿Ya tienes una cuenta? <a href="#">Inicia sesión</a>
              </p>
            </form>
          </section>
        </main>
      </body>
    </html>
  );
}
