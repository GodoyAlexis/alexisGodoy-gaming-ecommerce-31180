import "./CartWidget.css";
import { Button } from "react-bootstrap";

const CartWidget = () => {
  return (
    <Button variant="light">
      <img src="./CartWidget.png" alt="cart" />
      <span className="countCart">0</span>
    </Button>
  );
};

export default CartWidget;
