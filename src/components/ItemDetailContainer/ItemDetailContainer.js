import { useEffect, useState } from "react";
import { leggin } from "../../utils/inventaryListLeggins";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(leggin);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <div style={{ margin: "12px" }}>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
