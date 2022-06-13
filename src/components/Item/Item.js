import "./Item.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Item = ({ producto }) => {
  const { image, title, price, id } = producto;

  const { addProductToCart } = useContext(CartContext);

  return (
    <Card style={{ width: "18rem", margin: "12px" }}>
      <Card.Img variant="top" src={`/${image}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`$${price}`}</Card.Text>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={`/product/${id}`}>
            <Button variant="info">Detalle</Button>
          </Link>
          <Button variant="info" onClick={() => addProductToCart(producto)}>
            Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
