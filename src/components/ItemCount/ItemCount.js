import "./ItemCount.css";

import { Button } from "react-bootstrap";

const ItemCount = ({ stock, setQuantity, quantity, setShowButton }) => {
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
        }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
