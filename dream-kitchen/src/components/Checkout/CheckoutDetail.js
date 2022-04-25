import React, { useContext } from "react";
import CartContext from "../../context/cartcontext";
import "./CheckoutDetail.css";

const CheckoutDetail = () => {
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
        <div className="CheckoutItem">
          <img src={`/images/${cartProduct.image}`} className="CheckoutImage" />
          <div className="CheckoutTitlePriceCont">
            <div className="CheckoutTitle">{cartProduct.title}</div>
            <div className="CheckoutPrice">${cartProduct.price}</div>
          </div>
          <div className="CheckoutButtons">
            <div className="CheckoutButtonRest" onClick={Reduce}>
              -
            </div>
            <div className="CheckoutButtonQty">{cartProduct.quantity}</div>
            <div className="CheckoutButtonAdd" onClick={Increase}>
              +
            </div>
            <div className="CheckoutButtonDelete" onClick={del}>
              X
            </div>
            <div className="CheckoutPrice">
              ${cartProduct.price * cartProduct.quantity}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CheckoutDetail;
