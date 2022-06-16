import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import inventaryProducts from "../../utils/inventaryProducts";
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

  const productFilter = inventaryProducts.find((product) => {
    return product.id == id;
  });

  const getItem = () => {
    changeLoading();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productFilter);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then((res) => {
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
