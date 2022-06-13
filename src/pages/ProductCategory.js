import ItemList from "../components/ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import inventaryProducts from "../utils/inventaryProducts";

const ProductCategory = () => {
  const { category } = useParams();

  const [stock, setStock] = useState([]);

  const getInventary = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(inventaryProducts);
      }, 2000);
    });
  };

  useEffect(() => {
    setStock([])
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
    return array.map( (item) => {
      if (item.category == category) {
        return setStock((stock) => [...stock, item]);
      }
    });
  };
  return (
    <div>
      <ItemList stock={stock} title={category} />
    </div>
  );
};

export default ProductCategory;
