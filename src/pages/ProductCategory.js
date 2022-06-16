import ItemList from "../components/ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import inventaryProducts from "../utils/inventaryProducts";
import { Spinner } from "react-bootstrap";

const ProductCategory = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(false);
  const [stock, setStock] = useState([]);

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
    setStock([]);
    getInventary()
      .then((response) => {
        filterCategory(response);
      })
      .catch((err) => {
        console.log("Fallo la solicitud");
      })
      .finally(() => {
        console.log("Se concluyo la solicitud");
      });
  }, [category]);

  const filterCategory = (array) => {
    return array.map((item) => {
      if (item.category == category) {
        return setStock((stock) => [...stock, item]);
      }
    });
  };
  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status" style={{ marginTop: "40px" }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemList stock={stock} title={category} />
      )}
    </div>
  );
};

export default ProductCategory;
