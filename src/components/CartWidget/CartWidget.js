import "./CartWidget.css";
import { Button, Offcanvas } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import { useContext, useState } from "react";

import CartList from "../CartList/CartList";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { cartListItems, clearCart, quantityCart } = useContext(CartContext);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <img src="../CartWidget.png" alt="cart" />
        <span className="countCart">{quantityCart}</span>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Productos seleccionados</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartListItems.map((cartItem) => {
            return <CartList product={cartItem} />;
          })}
          {quantityCart !== 0 ? (
            <Button
              className="clearCart"
              variant="outline-secondary"
              onClick={() => clearCart()}
            >
              Vaciar carrito
            </Button>
          ) : (
            <h5 className="text-center">No ha seleccionado ningun producto!</h5>
          )}
        </Offcanvas.Body>
        {quantityCart !== 0 && (
          <Button variant="info">
            <Link
              className="text-white"
              style={{ textDecoration: "none" }}
              to="/cart"
            >
              Finalizar Compra
            </Link>
          </Button>
        )}
      </Offcanvas>
    </>
  );
};

export default CartWidget;
