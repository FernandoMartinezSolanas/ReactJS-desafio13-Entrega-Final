import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalContext from "../../context/modalcontext";
import CartContext from "../../context/cartcontext";
import "./OrderConfirmation.css";
import { Link } from "react-router-dom";

function OrderConfirmationForm(props) {
  const { Show, handleCloseModal } = useContext(ModalContext);
  const { emptyCartProducts } = useContext(CartContext);

  const CloseandEmpty = () => {
    handleCloseModal();
    emptyCartProducts();
  };

  return (
    <>
      <Modal show={Show}>
        <Modal.Header>
          <Modal.Title>Orden Creada</Modal.Title>
        </Modal.Header>
        <Modal.Body>Numero de Orden Generada: {props.ordernumber}</Modal.Body>
        <Modal.Footer>
          <Button
            className="CloseButton"
            variant="secondary"
            onClick={CloseandEmpty}
          >
            <Link to={`/`}>Cerrar y volver al inicio</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderConfirmationForm;
