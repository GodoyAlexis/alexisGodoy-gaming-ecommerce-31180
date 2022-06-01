import "./ItemDetail.css";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const { image, title, price, stock, image2, image3, image4, image5 } =
    product;
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={2}>
                <Row>
                  <Card.Img variant="top" src={`./${image}`} />
                </Row>
                <Row style={{ marginTop: "12px" }}>
                  <Card.Img variant="top" src={`./${image2}`} />
                </Row>
                <Row style={{ marginTop: "12px" }}>
                  <Card.Img variant="top" src={`./${image3}`} />
                </Row>
                <Row style={{ marginTop: "12px" }}>
                  <Card.Img variant="top" src={`./${image4}`} />
                </Row>
                <Row style={{ marginTop: "12px" }}>
                  <Card.Img variant="top" src={`./${image5}`} />
                </Row>
              </Col>
              <Col md={10}>
                <Card.Img variant="top" src={`./${image}`} />
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
              <h5>3 cuotas sin interes de $2.913</h5>
              <h5>6 cuotas sin interes de $1.457</h5>
              <h5>12 cuotas sin interes de $728</h5>
            </div>
            <div className="containerCount" style={{ marginTop: "20px" }}>
              <ItemCount stock={stock}></ItemCount>
              <Button className="buttonAgregar" variant="info">
                Agregar al carrito
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetail;
