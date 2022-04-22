import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalContext from "../context/modalcontext";

function OrderConfirmationForm(props) {
  const { Show, handleClose } = useContext(ModalContext);

  return (
    <>
      <Modal show={Show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Orden Creada</Modal.Title>
        </Modal.Header>
        <Modal.Body>Numero de Orden Generada: {props.ordernumber}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderConfirmationForm;
