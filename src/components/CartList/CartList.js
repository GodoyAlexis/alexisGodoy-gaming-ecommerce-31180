import "./CartList.css"
import { useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import CartContext from "../../context/CartContext";

const CartList = ({ product }) => {
  const { removeProductToCart, addProductToCart, clearProductToCart } =
    useContext(CartContext);

  return (
    <Row className="cartList d-flex align-items-center" key={product.id}>
      <Col style={{width:"25%"}} className="mt-2">
        <Card.Img variant="top" src={`/${product.image}`} />
      </Col>
      <Col style={{width:"25%", display:"flex", flexDirection:"column" }}>
        <p className="info">{product.title}</p>
        <p className="info">${product.price * product.amount}</p>
      </Col>
      <Col style={{width:"25%"}} className="d-flex align-items-center justify-content-center">
        <Button
          variant="default"
          className="countButton"
          onClick={() => removeProductToCart(product)}
        >
          -
        </Button>
        <p className="m-1">{product.amount}</p>
        <Button
          variant="default"
          className="countButton"
          onClick={() => addProductToCart(product)}
        >
          +
        </Button>
      </Col>
      <Col style={{width:"25%"}}>
        <Button variant="light">
          <img
            src="../delete.png"
            alt="delete"
            onClick={() => clearProductToCart(product)}
          />
        </Button>
      </Col>
    </Row>
  );
};

export default CartList;
