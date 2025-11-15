import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function Predenuncia() {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

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

    return (
        <Row className="justify-content-center mx-4">
            <h1 className="my-4">Predenuncia</h1>
            <p className="fs-4 text mx-5">La función principal de este apartado es conocer las predenuncias  que se presenten, por hechos que pudieran ser constitutivos de los delitos de su competencia de conformidad con el Código Penal y la Ley de Acceso de las Mujeres a una Vida Libre de Violencia, así como canalizar a las victimas con un orientador para el proceso de denuncia. </p>

            <Col
                md={8}>
                <Form onSubmit={handleSubmit} className="mx-5 my-5">
                    <h2 className="mb-2 d-flex justify-content-center align-items-center">Formulario de Predenuncia</h2>
                    <Form.Group className="mb-4" controlId="email-01">
                        <Form.Label className="fs-4 text mt-2">Correo electrónico:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Correo electrónico"
                            size="lg"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="nombre-01">
                        <Form.Label className="fs-4 text">Nombre:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            size="lg"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="apellidop-02">
                        <Form.Label className="fs-4 text">Apellido paterno:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Apellido paterno"
                            size="lg"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="apellidom-03">
                        <Form.Label className="fs-4 text">Apellido materno:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Apellido materno"
                            size="lg"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="edad-04">
                        <Form.Label className="fs-4 text">Edad:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Edad"
                            size="lg"
                            min="0"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="municipio-05">
                        <Form.Label className="fs-4 text">Municipio:</Form.Label>
                        <Form.Select
                            value={municipio}
                            onChange={(e) => setMunicipio(e.target.value)}
                            size="lg"
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
                        <Form.Label className="fs-4 text">Fecha de los hechos:</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Fecha"
                            size="lg"
                            min="0"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="textarea-06">
                        <Form.Label className="fs-4 text">Descripción de los hechos:</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Redacta la descripción..." size="lg" />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button variant="danger" size="md" type="submit" className="px-5 btn btn-primary fs-5 mt-5">
                            Enviar
                        </Button>
                    </div>
                </Form>
            </Col>

        </Row >

    );
}