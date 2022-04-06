import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cart from "./cart";

function CartWidget() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <li className="nav-item nav-item-cart" id="carritoIcon">
      <div className="containerCarrito">
        <svg
          xmlns=" http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-bag"
          viewBox="0 0 16 16"
          variant="primary"
          onClick={handleShow}
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
        <p id="carritoQ">0</p>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        backdrop={true}
        scroll={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart></Cart>
        </Offcanvas.Body>
      </Offcanvas>
    </li>
  );
}

export default CartWidget;
