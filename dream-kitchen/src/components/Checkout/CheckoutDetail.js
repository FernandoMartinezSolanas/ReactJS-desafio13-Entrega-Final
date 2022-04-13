import React, { useContext } from "react";
import CartContext from "../../context/cartcontext";
import "./CheckoutDetail.css";

const CheckoutDetail = () => {
  const { cartProducts, deleteProduct } = useContext(CartContext);

  return cartProducts.map((cartProduct) => {
    const del = () => {
      deleteProduct(cartProduct);
    };

    return (
      <div key={cartProduct.id}>
        <div className="CheckoutItem">
          <img src={cartProduct.picture} className="CheckoutImage" />
          <div className="CheckoutTitlePriceCont">
            <div className="CheckoutTitle">{cartProduct.title}</div>
            <div className="CheckoutPrice">${cartProduct.price}</div>
          </div>
          <div className="CheckoutButtons">
            <div className="CheckoutButtonRest">-</div>
            <div className="CheckoutButtonQty">1</div>
            <div className="CheckoutButtonAdd">+</div>
            <div className="CheckoutButtonDelete" onClick={del}>
              X
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CheckoutDetail;
