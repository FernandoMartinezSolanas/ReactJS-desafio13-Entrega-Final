import React, { useContext } from "react";
import CartContext from "../../context/cartcontext";
import "./cart.css";

const Cart = () => {
  const { cartProducts, deleteProduct, reducequantity, increasequantity } =
    useContext(CartContext);

  return cartProducts.map((cartProduct) => {
    const del = () => {
      deleteProduct(cartProduct);
    };

    const Reduce = () => {
      reducequantity(cartProduct);
    };

    const Increase = () => {
      increasequantity(cartProduct);
    };

    return (
      <div key={cartProduct.id}>
        <div className="CartItem">
          <img src={`/images/${cartProduct.image}`} className="CartImage" />
          <div className="CartTitlePriceCont">
            <div className="CartTitle">{cartProduct.title}</div>
            <div className="CartPrice">${cartProduct.price}</div>
          </div>
          <div className="CartButtons">
            <div className="CartButtonRest" onClick={Reduce}>
              -
            </div>
            <div className="CartButtonQty">{cartProduct.quantity}</div>
            <div className="CartButtonAdd" onClick={Increase}>
              +
            </div>
            <div className="CartButtonDelete" onClick={del}>
              X
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Cart;
