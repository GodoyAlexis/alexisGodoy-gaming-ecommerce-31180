import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import inventaryProducts from "../../utils/inventaryProducts";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const productFilter = inventaryProducts.find((product) => {
    return product.id == id;
  });

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productFilter);
      }, 1000);
    });
  };

  useEffect(() => {
    getItem()
    .then((res)=>{
      setProduct(res)
    })
  }, [id]);

  return (
    <div style={{ margin: "12px" }}>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
