import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import db from "../../utils/firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const changeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const getProduct = async () => {
    changeLoading()
    const docRef = doc(db, "inventaryProducts", id);
    const docSnaptshop = await getDoc(docRef);
    let product = docSnaptshop.data();
    product.id = docSnaptshop.id;
    return product;
  };

  useEffect(() => {
    getProduct().then((res) => {
      setProduct(res);
    });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status" style={{ marginTop: "40px" }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div style={{ margin: "12px" }}>
          <ItemDetail product={product} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
