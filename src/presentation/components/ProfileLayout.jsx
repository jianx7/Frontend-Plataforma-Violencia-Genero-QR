import { Container, Row, Col } from "react-bootstrap";
import ProfileSidebar from "./ProfileSidebar";

export default function ProfileLayout({ children }) {
  return (
    <Container fluid className="py-4" style={{ backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
      <Row className="justify-content-center">
        <Col md={3}>
          <ProfileSidebar />
        </Col>
        <Col md={8} className="bg-white rounded-3 shadow-sm p-4">
          {children}
        </Col>
      </Row>
    </Container>
  );
}
