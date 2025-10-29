import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login() {
    return (
        <Container fluid className="vh-100">
            <Row className="h-100">
                 {/* Columna derecha: Imagen */}
                <Col
                    md={6}
                    className="d-none d-md-flex justify-content-center align-items-center"
                    style={{
                        backgroundImage: ``,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                </Col>
                {/* Columna izquierda: formulario */}
                <Col
                    md={6}
                    className="d-flex flex-column justify-content-center align-items-center bg-light"
                >
                    <div className="w-75">
                        <h2 className="mb-2 text-center">Bienvenida a GITASVG-QR</h2>
                        <p className="mb-5 text-center">INICIO DE SESIÓN</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="ejemplo@mail.com" />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>
                           <Form.Group className="mb-5" controlId="recuperarContraseña">
                               <p>¿No tienes una cuenta? <a href="/register">Regístrate</a></p>
                            </Form.Group>
                            <div className="d-grid justify-content-center">
                                <Button className="btn-login" type="submit">
                                    Entrar
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container >
    );
}

export default Login;
