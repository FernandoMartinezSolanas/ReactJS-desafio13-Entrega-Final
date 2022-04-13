import React, { useContext } from "react";
import CheckoutDetail from "../Checkout/CheckoutDetail";
import CartContext from "../../context/cartcontext";

const Checkout = () => {
  const { cartProducts, calculeTotalPrice } = useContext(CartContext);
  const total = calculeTotalPrice();

  return (
    <div className="Container">
      <CheckoutDetail></CheckoutDetail>
      <div className="CheckoutDetailTotal">
        <div className="CheckoutDetailTotalTitle">TOTAL</div>
        <div>${total}</div>
      </div>
      <div className="FinCompra">
        <button>FINALIZAR COMPRA</button>
      </div>
    </div>
  );
};

export default Checkout;
