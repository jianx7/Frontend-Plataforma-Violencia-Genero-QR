import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { chatService } from "../../domain/services/chatService";

export default function Predenuncia() {
    const [modal, setModal] = useState(false)
    {/*const [curp, setCurp] = useState("");
    const[correo, setCorreo]=useState("marian@gmail.com");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [descripcion, setDescripcion] = useState("");*/}
    
    const [municipio, setMunicipio] = useState("");
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

    const [tipoViolencia, setTipoViolencia] = useState("");

    const tiposViolencia = [
        "Psicológica",
        "Fisica",
        "Patrimonial",
        "Económica",
        "Sexual",
        "Laboral y Docente",
        "Digital",
    ];


    // === ESTADO UNIFICADO DEL FORM ===
    const [formData, setFormData] = useState({
        correo_electronico: "",
        nombre: "",
        apellido_paterno: "",
        apellido_materno: "",
        curp: "",
        fecha_nacimiento: "",
        municipio: "",
        fecha_hechos: "",
        tipo_violencia: "",
        descripcion_hechos: ""
    });

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

    const curpChange = (e) => {
        // Convierte a mayúsculas y limita a 18 caracteres la curp
        const value = e.target.value.toUpperCase().slice(0, 18);
        setCurp(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setModal(true)
    };

    return (
        <Row className="justify-content-center mx-4">
            <h2 className="fw-bold my-4">Predenuncia</h2>
            <p className=" mx-5">La función principal de este apartado es conocer las predenuncias  que se presenten, por hechos que pudieran ser constitutivos de los delitos de su competencia de conformidad con el Código Penal y la Ley de Acceso de las Mujeres a una Vida Libre de Violencia, así como canalizar a las víctimas con un orientador para el proceso de denuncia. </p>

            <Col
                md={8}
                className="rounded border border-light-subtle-5 mb-4">
                <Form onSubmit={handleSubmit} className="mx-5 my-4">
                    <h3 className="mb-3 d-flex justify-content-center align-items-center">Formulario de Predenuncia</h3>

                    <Form.Group className="mb-4" controlId="email-01">
                        <Form.Label className="fs-5 text mt-2">Correo electrónico: *</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Correo electrónico"
                            size="lg"
                            required
                            value={formData.correo_electronico || ""}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="nombre-01">
                        <Form.Label className="fs-5 text">Nombre: *</Form.Label>
                        <Form.Control
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
                            type="text"
                            placeholder="Apellido materno"
                            size="lg"
                            required
                            value={formData.apellido_materno || ""}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label className="fs-5 text">CURP: *</Form.Label>
                        <Form.Control
                            type="text"
                            value={formData.curp || ""}
                            onChange={curpChange}
                            placeholder="CURP"
                            maxLength={18}
                            style={{ textTransform: "uppercase" }}
                            size="lg"
                        />
                        <Form.Text className="text-muted d-block mb-3">
                            Debe contener 18 caracteres.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="edad-04">
                        <Form.Label className="fs-5 text">Fecha de nacimiento: *</Form.Label>
                        <Form.Control
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

                        {municipio && <p className="mt-2">Seleccionado: {municipio}</p>}
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="fecha-05">
                        <Form.Label className="fs-5 text">Fecha de los hechos: *</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Fecha"
                            size="lg"
                            required
                            value={formData.fecha_hechos || ""}
                            onChange={handleChange}
                        />

                    </Form.Group><Form.Group className="mb-4" controlId="tipo-05">
                        <Form.Label className="fs-5 text">Tipo de violencia: *</Form.Label>
                        <Form.Select
                            //value={tipoViolencia}
                            size="lg"
                            //onChange={(e) => setTipoViolencia(e.target.value)}
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

                        {tipoViolencia && <p className="mt-2">Seleccionado: {tipoViolencia}</p>}
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="textarea-06">
                        <Form.Label className="fs-5 text">Descripción de los hechos: *</Form.Label>
                        <Form.Control
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
    );
}