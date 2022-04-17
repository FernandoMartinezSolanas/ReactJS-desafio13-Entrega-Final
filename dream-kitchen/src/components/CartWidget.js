import React, { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cart from "./cart";
import "./CartWidget.css";
import CartContext from "../context/cartcontext";
import WidgetContext from "../context/widgetcontext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { WidgetShow, handleClose, handleShow } = useContext(WidgetContext);

  const { cartProducts, calculeTotalPrice } = useContext(CartContext);
  const total = calculeTotalPrice();

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
        <p id="carritoQ">{cartProducts.length}</p>
      </div>
      <Offcanvas
        show={WidgetShow}
        onHide={handleClose}
        placement={"end"}
        backdrop={true}
        scroll={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart></Cart>
          <div className="CartTotal">
            <div className="CartTotalPrice">
              <div>Total</div>
              <div>{total}</div>
            </div>
            <button className="CartTotalBuy">
              <Link to={`/checkout`} onClick={handleClose}>
                COMPRAR
              </Link>
            </button>
            <button className="CartTotalKeepLooking" onClick={handleClose}>
              <Link to={`/`}>SEGUIR VIENDO</Link>
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </li>
  );
}

export default CartWidget;
