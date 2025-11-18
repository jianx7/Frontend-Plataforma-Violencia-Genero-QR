import { useState } from "react";
import { Button, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaRobot, } from "react-icons/fa";
import Chatbot from "../pages/Chatbot";
import { RiRobot3Line } from "react-icons/ri";

export default function HomePanel() {
    const [show, setShow] = useState();


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Botón flotante */}
            {!show && (
                <OverlayTrigger
                    placement="left"
                    container={document.body}
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
                        <RiRobot3Line size={24} color="white" /> {/* Icono*/}
                    </Button>
                </OverlayTrigger>
            )}


            {/* Panel lateral*/}
            <Offcanvas show={show} onHide={handleClose} placement="end" backdrop="false" className="custom" >
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

