import {
    FloatingLabel,
    Container,
    Row,
    Col,
    Form,
    Button,
} from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";


export default function Login() {
    return (
        <main className="vh-100 ">
            <Container fluid className="h-100 px-0">
                <Row className="h-100">
                    {/* Columna izquierda: Imagen */}
                    <Col
                        sm={5} md={6}
                        className="bg-register text-light p-5 d-flex flex-column justify-content-center h-100"
                    >
                        <Button className="btn-back" onClick={() => window.history.back()}>
                            <IoMdArrowRoundBack color="#ffff" size={30} />
                        </Button>
                        <h1 className="fw-bold mb-4 fs-1">¡Bienvenida!</h1>
                        <p className="lead mb-4 fs-5">
                            Esta plataforma digital busca apoyar y orientar a mujeres en
                            situaciones de violencia. Inicia sesión para recibir la atención adecuada.
                        </p>
                        {/*<article>
                            <img
                                src="/assets/imagen-bienvenida.png"
                                alt="Imagen institucional"
                                className="img-fluid rounded"
                            />
                        </article>*/}

                    </Col>

                    {/* Columna derecha: formulario */}
                    <Col
                        sm={7} md={6}
                        className="p-5 d-flex justify-content-center align-items-center h-100">

                        <Form className="form-gob w-100">
                            <h2 className="fw-bold mb-2 fs-1">Bienvenida a GITASVG-QR</h2>
                            <p className="mb-4 fs-4">Inicio de Sesión</p>

                            <FloatingLabel
                                controlId="floatingEmail"
                                label="Correo electrónico"
                                className="mb-3 fs-5"
                            >
                                <Form.Control
                                    size="lg" type="email"
                                    placeholder="correo@mail.com"
                                    required
                                    style={{ height: '50px' }}
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Contraseña"
                                className="mb-3 fs-5"
                            >
                                <Form.Control
                                    size="lg" type="password"
                                    placeholder="Ingrese su contraseña"
                                    required
                                />
                            </FloatingLabel>

                            <a href="/recuperar">¿Olvidaste tu contraseña?</a>

                            <Button
                                variant="danger"
                                type="submit"
                                size="lg"
                                className="w-100 fw-bold mt-4">
                                Entrar
                            </Button>

                            <p className="mt-4 text-center fw-semibold">¿No tienes una cuenta? <a href="/register">Regístrate</a></p>
                        </Form>
                    </Col>
                </Row>
            </Container >
        </main>
    );
}


