import "./CardItem.css";
import { Button, Card } from "react-bootstrap";

const CardItem = ({ title, price, image }) => {
  return (
    <Card style={{ width: "18rem", marginTop: "30px" }}>
      <Card.Img variant="top" src={`./${image}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`$${price}`}</Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
