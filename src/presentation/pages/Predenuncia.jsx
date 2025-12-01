import { Form, Button, Row, Col, Modal, Container, Alert, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { chatService } from "../../domain/services/chatService";
import { formatDate } from "../utils/formatDate";

export default function Predenuncia() {
    const sessionId = localStorage.getItem("session_id");
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false)

    const municipios = [
        "Benito Juárez",
        "Cozumel",
        "Felipe Carrillo Puerto",
        "Isla Mujeres",
        "José María Morelos",
        "Lázaro Cárdenas",
        "Othón P. Blanco",
        "Solidaridad",
        "Tulum",
        "Bacalar",
        "Puerto Morelos"
    ];


    const tiposViolencia = [
        "Psicológica",
        "Física",
        "Patrimonial",
        "Económica",
        "Sexual",
        "Laboral y Docente",
        "En la comunidad",
        "Institucional",
        "Digital",
    ];


    // === ESTADO UNIFICADO DEL FORM ===
    const [formData, setFormData] = useState({
        correo_electronico: "",
        nombre: "",
        apellido_paterno: "",
        apellido_materno: "",
        fecha_nacimiento: "",
        municipio: "",
        fecha_hechos: "",
        tipo_violencia: "",
        descripcion_hechos: ""
    });

    useEffect(() => {
        const loadCaseData = async () => {
            try {
                const data = await chatService.getCase(sessionId);

                const mapped = {
                    correo_electronico: data.correo || "",
                    nombre: data.nombre || "",
                    apellido_paterno: data.apellido_paterno || "",
                    apellido_materno: data.apellido_materno || "",
                    fecha_nacimiento: data.fecha_nacimiento ? formatDate(data.fecha_nacimiento) : "",
                    municipio: data.municipio || "",
                    fecha_hechos: data.fecha_hechos ? formatDate(data.fecha_hechos) : "",
                    tipo_violencia: data.tipo_violencia || "",
                    descripcion_hechos: data.descripcion_hechos || ""
                };

                localStorage.setItem("predenuncia_data", JSON.stringify(mapped));

            } catch (error) {
                console.log("Error cargando caso:", error);
            }
            finally {

                setLoading(false);
            }
        };

        if (sessionId) loadCaseData();
    }, [sessionId]);

    {/*useEffect(() => {
        const fetchCase = async () => {
            try {
                const data = await chatService.getCase(sessionId);
                setFormData(prev => ({ ...prev, ...data }));
            } catch (err) {
                console.log("Error obteniendo caso:", err);
            }
        };

        if (sessionId) fetchCase();
    }, [sessionId]);*/}

    // carga datos al entrar a predenuncia
    useEffect(() => {
        const saved = localStorage.getItem("predenuncia_data");
        if (saved) {
            setFormData(prev => ({
                ...prev,
                ...JSON.parse(saved)
            }));
        }
    }, []);



    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setModal(true)
    };


    return (
        <Container>
            <Row className="justify-content-center">
                <h2 className="fw-bold my-4">Pre-denuncia</h2>
                <p className=" mx-5">La función principal de este apartado es conocer las pre-denuncias  que se presenten, por hechos que pudieran ser constitutivos de los delitos de su competencia de conformidad con el Código Penal y la Ley de Acceso de las Mujeres a una Vida Libre de Violencia, así como canalizar a las víctimas con un orientador para el proceso de denuncia. <b>Antes de enviar, verifique que los datos sean correctos.</b> </p>

                <Col
                    md={8}
                    className="rounded border border-light-subtle-5 mb-4">
                    {/*  Banner de carga arriba del formulario */}
                    {loading && (
                        <Alert variant="light" className="d-flex align-items-center gap-3 mb-4">
                            <Spinner animation="border" size="sm" />
                            <span>Cargando datos del caso...</span>
                        </Alert>
                    )}
                    <Form onSubmit={handleSubmit} className="mx-5 my-4">
                        <h3 className="mb-3 d-flex justify-content-center align-items-center">Formulario de Pre-denuncia</h3>

                        <Form.Group className="mb-4" controlId="email-01">
                            <Form.Label className="fs-5 text mt-2">Correo electrónico: *</Form.Label>
                            <Form.Control
                                name="correo_electronico"
                                type="email"
                                placeholder="Correo electrónico"
                                size="lg"
                                required
                                value={formData.correo_electronico || ""}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="nombre-01">
                            <Form.Label className="fs-5 text">Nombre(s): *</Form.Label>
                            <Form.Control
                                name="nombre"
                                type="text"
                                placeholder="Nombre"
                                size="lg"
                                required
                                value={formData.nombre || ""}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="apellidop-02">
                            <Form.Label className="fs-5 text">Apellido paterno: *</Form.Label>
                            <Form.Control
                                name="apellido_paterno"
                                type="text"
                                placeholder="Apellido paterno"
                                size="lg"
                                required
                                value={formData.apellido_paterno || ""}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="apellidom-03">
                            <Form.Label className="fs-5 text">Apellido materno: *</Form.Label>
                            <Form.Control
                                name="apellido_materno"
                                type="text"
                                placeholder="Apellido materno"
                                size="lg"
                                required
                                value={formData.apellido_materno || ""}
                                onChange={handleChange}
                            />
                        </Form.Group>


                        <Form.Group className="mb-4" controlId="edad-04">
                            <Form.Label className="fs-5 text">Fecha de nacimiento: *</Form.Label>
                            <Form.Control
                                name="fecha_nacimiento"
                                type="date"
                                placeholder="Fecha"
                                size="lg"
                                required
                                value={formData.fecha_nacimiento || ""}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="municipio-05">
                            <Form.Label className="fs-5 text">Municipio: *</Form.Label>
                            <Form.Select
                                //value={municipio}
                                size="lg"
                                name="municipio"
                                //onChange={(e) => setMunicipio(e.target.value)}
                                value={formData.municipio || ""}
                                onChange={handleChange}

                            >
                                <option value="">Selecciona un municipio</option>
                                {municipios.map((m) => (
                                    <option key={m} value={m}>
                                        {m}
                                    </option>
                                ))}
                            </Form.Select>

                            {formData.municipio && <p className="mt-2">Seleccionado: {formData.municipio}</p>}
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="fecha-06">
                            <Form.Label className="fs-5 text">Fecha de los hechos: *</Form.Label>
                            <Form.Control
                                name="fecha_hechos"
                                type="date"
                                placeholder="Fecha"
                                size="lg"
                                required
                                value={formData.fecha_hechos || ""}
                                onChange={handleChange}
                            />

                        </Form.Group>
                        <Form.Group className="mb-4" controlId="tipo-05">
                            <Form.Label className="fs-5 text">Tipo de violencia: *</Form.Label>
                            <Form.Select
                                name="tipo_violencia"
                                size="lg"
                                value={formData.tipo_violencia || ""}
                                onChange={handleChange}

                            >
                                <option value="">Selecciona el tipo de violencia</option>
                                {tiposViolencia.map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </Form.Select>

                            {formData.tipoViolencia && <p className="mt-2">Seleccionado: {formData.tipoViolencia}</p>}
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="textarea-06">
                            <Form.Label className="fs-5 text">Descripción de los hechos: *</Form.Label>
                            <Form.Control
                                name="descripcion_hechos"
                                as="textarea" rows={4} placeholder="Redacta la descripción..." size="lg" required
                                value={formData.descripcion_hechos || ""}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-center">
                            <Button variant="danger" size="md" type="submit" className="px-5 btn btn-primary fs-5 mt-3">
                                Enviar
                            </Button>
                        </div>
                    </Form>

                    {/* --- MODAL --- */}
                    <Modal show={modal} onHide={() => setModal(false)} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Datos enviados</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p><strong>Folio de seguimiento: </strong>A123</p>
                            <p>Recuerda guardar tu folio para realizar la consulta del seguimiento de tu predenuncia.</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="light" className="btn btn-outline-secondary" onClick={() => setModal(false)}>
                                Aceptar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row >
        </Container>
    );
}