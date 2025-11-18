import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { BsRobot } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { chatService } from "../../domain/services/chatService";
import { formatMarkdown } from "../utils/formatMarkdown";

export default function Chatbot() {

    const [messages, setMessages] = useState([
        { sender: "bot", text: "¡Hola! 👋 ¿En qué puedo ayudarte hoy?" },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const userId = "user_123";

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Agregar mensaje del usuario
        setMessages(prev => [...prev, { text: input, sender: 'user' }]);

        const currentInput = input;
        setInput('');
        setLoading(true);

        try {
            // Llamada a la API
            const response = await chatService.sendMessage(userId, currentInput);

            // Formatear Markdown usando tu función
            const formattedText = formatMarkdown(response.response);

            // Agregar respuesta del bot formateada
            setMessages(prev => [...prev, {
                text: formattedText,
                sender: 'bot'
            }]);

        } catch (error) {
            setMessages(prev => [...prev, {
                text: 'Error al procesar mensaje',
                sender: 'bot',
                error: true
            }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container fluid className="d-flex flex-column" style={{ height: "100%", width: "100%" }}>
            <Row>
                <Col
                    className="d-flex align-items-center justify-content-between px-4 py-2"
                    style={{
                        backgroundColor: "#611232",
                        color: "white",
                    }}
                >
                    <div className="d-flex align-items-center">
                        <div
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                backgroundColor: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "10px",
                            }}
                        >
                            <BsRobot size={24} color="#000000ff" />
                        </div>

                        <div>
                            <h5 className="mb-0 fw-bold">GITASVG-QR Bot</h5>
                            <small className="text-light" style={{ fontSize: '12px' }}>
                                <span
                                    style={{
                                        height: "10px",
                                        width: "10px",
                                        backgroundColor: "#0db03eff",
                                        borderRadius: "50%",
                                        display: "inline-block",
                                        marginRight: "6px",
                                    }}
                                ></span>
                                Chatbot de orientación
                            </small>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Contenedor del chat */}
            <Row className="flex-grow-1 justify-content-center mt-4 rounded-4">
                <Col xs={12}>
                    <Card className="shadow-lg">
                        <Card.Body className="d-flex flex-column" style={{ height: "88vh" }}>
                            
                            {/* Mensajes */}
                            <div className="flex-grow-1 overflow-auto mb-3">
                                {messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={`d-flex mb-3 ${msg.sender === "user"
                                            ? "justify-content-end"
                                            : "justify-content-start"
                                        }`}
                                    >

                                        {/* BOT */}
                                        {msg.sender === "bot" && (
                                            <>
                                                <BsRobot
                                                    size={24}
                                                    color="#611232"
                                                    className="align-self-start me-2 mt-1"
                                                />
                                                <div
                                                    className="bg-light border text-dark lead px-3 py-2 rounded-4"
                                                    style={{ maxWidth: "75%" }}
                                                    dangerouslySetInnerHTML={{ __html: msg.text }}
                                                ></div>
                                            </>
                                        )}

                                        {/* USUARIO */}
                                        {msg.sender === "user" && (
                                            <div
                                                className="bg-chat lead px-3 py-2 rounded-4"
                                                style={{ maxWidth: "75%" }}
                                            >
                                                {msg.text}
                                            </div>
                                        )}

                                    </div>
                                ))}
                            </div>

                            {/* Input */}
                            <div className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="Escribe tu mensaje..."
                                    className="me-2 rounded-4 input-focus"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend(e)}
                                />
                                <Button
                                    className="rounded-4 send"
                                    onClick={handleSend}
                                    disabled={loading}
                                >
                                    {loading ?  "..." : <IoSend size={20} />}
                                </Button>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


