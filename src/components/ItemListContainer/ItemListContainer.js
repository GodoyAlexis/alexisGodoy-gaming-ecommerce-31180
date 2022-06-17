import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
//Firestore
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const ItemListContainer = ({ title }) => {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    changeLoading()
    const productSnapshot = await getDocs(collection(db, "inventaryProducts"));
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      console.log(product);
      return product;
    });
    return productList;
  };

  const changeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getProducts()
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
