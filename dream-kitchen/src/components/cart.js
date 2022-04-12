import React, { useContext } from "react";
import CartContext from "../context/cartcontext";
import "./cart.css";

const Cart = () => {
  const { cartProducts, deleteProduct } = useContext(CartContext);

  return cartProducts.map((cartProduct) => {
    const del = () => {
      deleteProduct(cartProduct);
    };
    return (
      <div key={cartProduct.id}>
        <div className="CartItem">
          <img src={cartProduct.picture} className="CartImage" />
          <div className="CartTitlePriceCont">
            <div className="CartTitle">{cartProduct.title}</div>
            <div className="CartPrice">${cartProduct.price}</div>
          </div>
          <div className="CartButtons">
            <div className="CartButtonRest">-</div>
            <div className="CartButtonQty">1</div>
            <div className="CartButtonAdd">+</div>
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
