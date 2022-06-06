import "./ItemDetail.css";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { image, title, price, stock, image2, image3, image4 } = product;

  const [quantity, setQuantity] = useState(1);

  const [showButton, setShowButton] = useState(false);

  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={2}>
                <Row>
                  <Card.Img variant="top" src={`../${image}`} />
                </Row>
                <Row style={{ marginTop: "12px" }}>
                  <Card.Img variant="top" src={`../${image2}`} />
                </Row>
                <Row style={{ marginTop: "12px" }}>
                  <Card.Img variant="top" src={`../${image3}`} />
                </Row>
                <Row style={{ marginTop: "12px" }}>
                  <Card.Img variant="top" src={`../${image4}`} />
                </Row>
              </Col>
              <Col md={10}>
                <Card.Img variant="top" src={`../${image}`} />
              </Col>
            </Row>
          </Col>
          <Col className="colDetail" md={4}>
            <div className="containerHeader" style={{ marginTop: "20px" }}>
              <h1 style={{ textTransform: "uppercase" }}>{title}</h1>
            </div>
            <div className="containerPrice" style={{ marginTop: "20px" }}>
              <p>${price}</p>
            </div>
            <div className="containerDues">
              <h4>Envio Gratis</h4>
              <h5>3 cuotas sin interes de ${Math.round(price / 3)}</h5>
              <h5>6 cuotas sin interes de ${Math.round(price / 6)}</h5>
              <h5>12 cuotas sin interes de ${Math.round(price / 12)}</h5>
            </div>
            {!showButton ? (
              <div className="containerFooter" style={{ marginTop: "20px" }}>
                <ItemCount
                  stock={stock}
                  setQuantity={setQuantity}
                  quantity={quantity}
                  setShowButton={setShowButton}
                ></ItemCount>
              </div>
            ) : (
              <div>
                <Button variant="info" className="text-white">
                  <Link className="text-white" style={{textDecoration: "none"}} to="/cart">Finalizar compra</Link>
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetail;
