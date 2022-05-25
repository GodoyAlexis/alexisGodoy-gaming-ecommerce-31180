import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";

const ItemList = (props) => {
  return (
    <>
      <h2 className="title">{props.title}</h2>
      <Container fluid="md">
        <Row>
          {props.stock.map((producto) => {
            return (
              <Col
                className="colCard justify-content-center"
                xs={6}
                md={4}
                lg={3}
                key={producto.id}
              >
                <Item producto={producto} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ItemList;
