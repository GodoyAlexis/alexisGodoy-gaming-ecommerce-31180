import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const FormModal = ({
  handleChange,
  handleClose,
  formValue,
  handleSubmitFinally,
}) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();

    setValidated(true);

    validated && handleSubmitFinally();
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="name">
          <Form.Label>Nombre y apellido</Form.Label>
          <Form.Control
            name="name"
            value={formValue.name}
            onChange={handleChange}
            type="text"
            placeholder="Escriba su nombre aqui.."
            required
          />
          <Form.Control.Feedback type="invalid">
            Porfavor complete este campo.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Campo completado!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={formValue.email}
            onChange={handleChange}
            type="email"
            placeholder="ejemplo@gmail.com"
            required
          />
          <Form.Control.Feedback type="invalid">
            Porfavor complete este campo.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Campo completado!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="dirección">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            name="dirección"
            value={formValue.dirección}
            type="text"
            onChange={handleChange}
            placeholder="Ej: blanca 1532"
            required
          />
          <Form.Control.Feedback type="invalid">
            Porfavor complete el campo.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Campo completado!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="phone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            name="phone"
            type="text"
            value={formValue.phone}
            onChange={handleChange}
            placeholder="Ej: 1147593243"
            required
          />
          <Form.Control.Feedback type="invalid">
            Porfavor complete este campo.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Campo completado!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check required label="Confirmar datos." feedbackType="invalid" />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button
          style={{ marginRight: "10px" }}
          variant="secondary"
          onClick={handleClose}
        >
          Cerrar
        </Button>
        <Button
          variant="info"
          style={{ marginRight: "10px" }}
          type="submit"
          onClick={handleSubmit}
        >
          Enviar
        </Button>
      </div>
    </Form>
  );
};

export default FormModal;
