import { Card } from "react-bootstrap";

export default function StatCard({ title, value, variant }) {
  const colors = {
    danger: "#9d2449",
    warning: "#C0A56B",
    success: "#13322B",
    primary: "#611232",
  };

  return (
    <Card
      className="shadow-sm text-light"
      style={{ backgroundColor: colors[variant], border: "none" }}
    >
      <Card.Body>
        <h5 className="fw-bold">{title}</h5>
        <h2 className="fw-bold">{value}</h2>
      </Card.Body>
    </Card>
  );
}
