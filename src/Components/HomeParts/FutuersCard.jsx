import Card from "react-bootstrap/Card";

function FutuersCard({ title, description, icon }) {
  return (
    <Card
      style={{
        width: "18rem",
        border: "none",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
      className="text-center p-3 feature-card"
    >
      <div
        className="text-center my-3 feature-icon"
        style={{ fontSize: "3rem", color: "#ff5722" }}
      >
        {icon}
      </div>
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FutuersCard;
