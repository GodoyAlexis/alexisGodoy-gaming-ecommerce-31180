import "./Item.css";
import { Button, Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ producto }) => {
  const { image, title, price, stock } = producto;
  return (
    <Card style={{ width: "18rem", margin: "12px"}}>
      <Card.Img variant="top" src={`./${image}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`$${price}`}</Card.Text>
        <ItemCount stock={stock}/>
        <Button variant="info">Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
