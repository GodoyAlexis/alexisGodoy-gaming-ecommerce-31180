import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import swal from "sweetalert";
import CartContext from "../../context/CartContext";
import db from "../../utils/firebaseConfig";
import FormModal from "../FormModal/FormModal";

const ModalCart = () => {
  const { cartListItems, totalPrice, cleanCartProducts } =
    useContext(CartContext);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
    dirección: "",
  });

  const [order, setOrder] = useState({
    buyer: {},
    items: cartListItems.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.amount,
      };
    }),
    total: Math.round(totalPrice * 0.85),
  });

  const handleSubmitFinally = (e) => {
    setOrder({ ...order, buyer: formValue });
    saveData({ ...order, buyer: formValue });
  };

  const handleChange = (e) => {
    console.log(e);
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const saveData = async (newOrder) => {
    const orderFirebase = collection(db, "orders");
    const orderDoc = await addDoc(orderFirebase, newOrder);
    console.log("Se genero la orden:", orderDoc.id);
    alertSuccess(orderDoc.id);
    cleanCartProducts();
    navigate("/");
  };

  const alertSuccess = (id) => {
    handleClose();
    swal({
      title: "Su compra ha sido finalizada!",
      text: `El codigo de su compra es: ${id}`,
      icon: "success",
      button: "Aceptar",
    });
  };

  return (
    <>
      <Button
        variant="info"
        style={{ marginBottom: "40px" }}
        onClick={handleShow}
      >
        Completar compra
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormModal
            formValue={formValue}
            handleClose={handleClose}
            handleChange={handleChange}
            handleSubmitFinally={handleSubmitFinally}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCart;
