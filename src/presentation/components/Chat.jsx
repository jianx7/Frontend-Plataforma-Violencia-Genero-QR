import { useState } from "react";
//import { useChat } from "../../domain/chatContext";
import { Button, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaRobot, } from "react-icons/fa";
import Chatbot from "../pages/Chatbot";

export default function HomePanel() {
    const [show, setShow] = useState();
   // const {showOffcanvas, setShowOffcanvas}=useChat();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Botón flotante */}
            {!show && (
                <OverlayTrigger
                    placement="left"
                    overlay={<Tooltip
                        id="tooltip-chat"
                        style={{ fontSize: "16px" }}
                    >¿Tienes dudas?
                    </Tooltip>
                    }
                >
                    <Button
                        onClick={handleShow}
                        className="btn-flotante rounded-circle shadow"
                    >
                        <FaRobot size={24} color="white" /> {/* Icono de menú */}
                    </Button>
                </OverlayTrigger>
            )}


            {/* Panel lateral*/}
            <Offcanvas show={show} onHide={handleClose} placement="end" className="bg-offcanvas" >
                <Offcanvas.Body className="p-0">
                    <Chatbot />
                    {/* Botón de cerrar flotante */}
                    <Button
                        onClick={handleClose}
                        className="position-absolute top-0 end-0 m-2 border-0"
                        style={{
                            background: "transparent",
                            color: "white",
                            fontSize: "20px",
                            zIndex: 10,
                        }}
                    >
                        ✕
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

