import "./ItemCount.css";

import { Button } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const ItemCount = ({
  stock,
  setQuantity,
  quantity,
  setShowButton,
  product,
}) => {
  const { addProductToCart } = useContext(CartContext);

  return (
    <div className="containerCount">
      <Button
        variant="outline-info"
        onClick={() => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
          }
        }}
      >
        -
      </Button>
      <p className="countSelected">{quantity}</p>
      <Button
        variant="outline-info"
        onClick={() => {
          if (quantity <= stock) {
            setQuantity(quantity + 1);
          }
        }}
      >
        +
      </Button>
      <Button
        className="buttonAgregar"
        variant="info"
        onClick={() => {
          setShowButton(true);
          addProductToCart({ ...product, amount: quantity });
        }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
