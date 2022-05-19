import "./CardList.css";
import CardItem from "../Card/CardItem";
import { Container, Row, Col } from "react-bootstrap";

const CardList = ({title}) => {
  return (
    <>
      <h2 className="title">{title}</h2>
      <Container fluid="md">
        <Row>
          <Col xs={6} md={3}>
            <CardItem
              title={"Cotton Carbon"}
              price={7340}
              image={"COTTONCARBON.jpg"}
            />
          </Col>
          <Col xs={6} md={3}>
            <CardItem
              title={"Cotton Black"}
              price={7340}
              image={"COTTONBLACK.jpg"}
            />
          </Col>
          <Col xs={6} md={3}>
            <CardItem
              title={"Cotton Grey"}
              price={7340}
              image={"COTTONGREY.jpg"}
            />
          </Col>
          <Col xs={6} md={3}>
            <CardItem
              title={"Cotton Navy"}
              price={7340}
              image={"COTTONNAVY.jpg"}
            />
          </Col>
          <Col xs={6} md={3}>
            <CardItem
              title={"Herradura"}
              price={8740}
              image={"HERRADURA.jpg"}
            />
          </Col>
          <Col xs={6} md={3}>
            <CardItem title={"Orchind"} price={8740} image={"ORCHIND.jpg"} />
          </Col>
          <Col xs={6} md={3}>
            <CardItem title={"Saffron"} price={8740} image={"SAFFRON.jpg"} />
          </Col>
          <Col xs={6} md={3}>
            <CardItem title={"Toucan"} price={8740} image={"TOUCAN.jpg"} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardList;
