import "./CartWidget.css";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const CartWidget = () => {
  const [show, setShow] = useState(false);
  const [quantityCart, setQuantityCart] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    cartListItems,
    removeProductToCart,
    addProductToCart,
    clearProductToCart,
    clearCart,
  } = useContext(CartContext);

  useEffect(() => {
    setQuantityCart(cartListItems.length);
  }, [cartListItems]);

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
            return (
              <Row className="d-flex align-items-center" key={cartItem.id}>
                <Col md={3} className="mt-2">
                  <Card.Img variant="top" src={`/${cartItem.image}`} />
                </Col>
                <Col md={4}>
                  <p>{cartItem.title}</p>
                </Col>
                <Col
                  md={3}
                  className="d-flex align-items-center justify-content-center"
                >
                  <Button
                    variant="default"
                    className="countButton"
                    onClick={() => removeProductToCart(cartItem)}
                  >
                    -
                  </Button>
                  <p className="m-1">{cartItem.amount}</p>
                  <Button
                    variant="default"
                    className="countButton"
                    onClick={() => addProductToCart(cartItem)}
                  >
                    +
                  </Button>
                </Col>
                <Col md={2}>
                  <Button variant="light">
                    <img
                      src="../delete.png"
                      alt="delete"
                      onClick={() => clearProductToCart(cartItem)}
                    />
                  </Button>
                </Col>
              </Row>
            );
          })}
          {quantityCart !== 0 ? (
            <Button className="clearCart" variant="outline-secondary" onClick={() => clearCart()}>Vaciar carrito</Button>
          ) : (
            <h5 className="text-center">No ha seleccionado ningun producto!</h5>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartWidget;
