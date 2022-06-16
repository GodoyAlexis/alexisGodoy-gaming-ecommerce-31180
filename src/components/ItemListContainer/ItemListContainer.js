import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import inventaryProducts from "../../utils/inventaryProducts";
import { Spinner } from "react-bootstrap";

const ItemListContainer = ({ title }) => {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(false);

  const changeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const getInventary = () => {
    return new Promise((resolve, reject) => {
      changeLoading();
      setTimeout(() => {
        resolve(inventaryProducts);
      }, 2000);
    });
  };

  useEffect(() => {
    getInventary()
      .then((response) => {
        setStock(response);
      })
      .catch((err) => {
        console.log("Fallo la solicitud");
      })
      .finally(() => {
        console.log("Se concluyo la solicitud");
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status" style={{ marginTop: "40px" }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemList stock={stock} title={title} />
      )}
    </div>
  );
};

export default ItemListContainer;
