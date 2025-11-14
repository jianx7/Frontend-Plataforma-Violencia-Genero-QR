import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { IoMdArrowRoundBack } from "react-icons/io";


export default function Login() {
    return (
        <main className="min-vh-100 d-flex align-items-center">
            <Container fluid>

                <Row className="align-items-center">
                    {/* Columna izquierda: Imagen */}
                    <Col
                        sm={4} md={6}
                        className="bg-register text-light p-5 d-flex flex-column justify-content-center position-relative"
                    >
                        <Button className="btn-back" onClick={() => window.history.back()}>
                            <IoMdArrowRoundBack color="#ffff" size={30} />
                        </Button>
                        <h1 className="fw-bold mb-4 fs-1">¡Bienvenida!</h1>
                        <p className="lead mb-4 fs-5">
                            Esta plataforma digital busca apoyar y orientar a mujeres en
                            situaciones de violencia. Inicia sesión para recibir la atención adecuada.
                        </p>
                        <article>
                            <img
                                src="/assets/imagen-bienvenida.png"
                                alt="Imagen institucional"
                                className="img-fluid rounded"
                            />
                        </article>

                    </Col>

                    {/* Columna derecha: formulario */}
                    <Col
                        sm={8} md={6}
                        className="p-5">

                        <h2 className="fw-bold mb-2 fs-1">Bienvenida a GITASVG-QR</h2>
                        <p className="mb-4 fs-4">Inicio de Sesión</p>

                        <Form className="form-gob">

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

                            <a className="text-secondary" href="/recuperar">¿Olvidaste tu contraseña?</a>

                            <Button
                                variant="danger"
                                type="submit"
                                size="lg"
                                className="w-100 fw-bold mt-4">
                                Entrar
                            </Button>

                            <p className="mt-4 text-center">¿No tienes una cuenta? <a href="/register">Regístrate</a></p>
                        </Form>
                    </Col>
                </Row>
            </Container >
        </main>
    );
}


