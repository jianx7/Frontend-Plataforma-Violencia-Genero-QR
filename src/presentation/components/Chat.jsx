// Chat.jsx
import { Button, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import Chatbot from "../pages/Chatbot";
import { BsRobot } from "react-icons/bs";

export default function Chat({ show, onOpen, onClose }) {
    return (
        <>
            {/* Botón flotante */}
            {!show && ( <Button
                        onClick={onOpen}
                        className="btn-flotante rounded-circle shadow"
                    >
                        <BsRobot size={40} color="black" />
                    </Button>
                
            )}
                {/*<OverlayTrigger
                    placement="left"
                    //container={document.body}
                    trigger={["hover", "focus"]}
                    overlay={
                        <Tooltip id="tooltip-chat" style={{ fontSize: "20px" }}>
                            Inicia un chat de orientación
                        </Tooltip>
                    }
                ></OverlayTrigger>*/}
                   

            {/* Panel lateral*/}
            <Offcanvas
                show={show}
                onHide={onClose}
                placement="end"
                backdrop="false"
                className="custom"
            >
                <Offcanvas.Body className="p-0">
                    <Chatbot />

                    {/* Botón cerrar */}
                    <Button
                        onClick={onClose}
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


