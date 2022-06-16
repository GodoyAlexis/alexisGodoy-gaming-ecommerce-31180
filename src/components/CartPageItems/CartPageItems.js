import "./CartPageItems.css";
import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import CartList from "../CartList/CartList";
import { Link } from "react-router-dom";

const CartPageItems = () => {
  const { cartListItems, quantityCart, totalPrice } = useContext(CartContext);

  return (
    <Container>
      <h2
        style={{
          padding: "20px",
          textTransform: "uppercase",
          textDecoration: "underline",
        }}
      >
        Carrito de compras
      </h2>
      {quantityCart !== 0 && <Row>
        <Col className="titleCart" style={{ width: "25%" }}>
          Producto
        </Col>
        <Col className="titleCart" style={{ width: "25%" }}>
          Nombre y Precio
        </Col>
        <Col className="titleCart" style={{ width: "25%" }}>
          Cantidad
        </Col>
        <Col className="titleCart" style={{ width: "25%" }}>
          Eliminar
        </Col>
      </Row>}
      {cartListItems.map((cartItem) => {
        return <CartList product={cartItem} />;
      })}

      {quantityCart < 1 && (
        <div style={{ padding: "20px" }}>
          <h2 style={{ padding: "20px" }}>
            No ha seleccionado ningun producto
          </h2>
          <Button variant="info">
            <Link
              className="text-white"
              style={{ textDecoration: "none" }}
              to="/products/leggins"
            >
              Seguir comprando
            </Link>
          </Button>
        </div>
      )}

      {quantityCart !== 0 && (
        <>
          <div
            className="d-flex"
            style={{
              borderBottom: "1px solid #333",
              padding:"30px",
              fontSize: "20px",
              fontWeight: "bold",
              justifyContent: "space-between",
            }}
          >
            <p>Subtotal:</p>
            <span>${Math.round(totalPrice)}</span>
          </div>

          <div
            className="d-flex"
            style={{
              padding: "30px 30px 10px 30px",
              fontSize: "20px",
              fontWeight: "bold",
              justifyContent: "space-between",
            }}
          >
            <p>Total:</p>
            <span>${Math.round(totalPrice * 0.85)}</span>
          </div>
          <h6 style={{ textAlign: "start", marginBottom: "30px" }}>
            15% de descuento en la primera compra.
          </h6>
        </>
      )}
    </Container>
  );
};

export default CartPageItems;
