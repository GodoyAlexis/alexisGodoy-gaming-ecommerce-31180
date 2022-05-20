import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import CardItem from "../Card/CardItem";
import { Container, Row, Col } from "react-bootstrap";
import { getInventary } from "./inventaryListLeggins";

const ItemListContainer = ({ title }) => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    
    getInventary()
      .then((response) => {
        setStock(response);
        console.log(response)
      })
      .catch((err) => {
        console.log("Fallo la solicitud");
      })
      .finally(() => {
        console.log("Se concluyo la solicitud");
      });
  }, []);

  return (
    <>
      <h2 className="title">{title}</h2>
      <Container fluid="md">
        <Row>
          {stock.map((producto) => {
            return (
              <Col className="colCard justify-content-center" xs={6} md={4} lg={3} key={producto.id}>
                <CardItem
                producto={producto}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ItemListContainer;
