import "./Item.css";
import { Button, Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { image, title, price, stock, id } = producto;
  return (
    <Card style={{ width: "18rem", margin: "12px"}}>
      <Card.Img variant="top" src={`/${image}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`$${price}`}</Card.Text>
        <ItemCount stock={stock}/>
        <div style={{display: "flex", justifyContent: "space-between"}}>
        <Link to={`/product/${id}`}><Button variant="info">Detalle</Button></Link>
        <Button variant="info">Comprar</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;