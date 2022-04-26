import React, { useContext } from "react";
import Itemcount from "../ItemCount/itemcount";
import "./ItemDetail.css";
import CartContext from "../../context/cartcontext";

const ItemDetail = ({ data }) => {
  const { title, description, price, picture, stock, image } = data;
  const { addProductToCart } = useContext(CartContext);

  const addProduct = (quantity) => {
    data.quantity = quantity;
    addProductToCart(data);
  };

  return (
    <div className="cardDetail">
      <img
        src={`/images/${image}`}
        className="card-img-top-detail"
        alt={picture}
      />
      <div className="card-body-detail">
        <h5 className="card-title-detail">{title}</h5>
        <p className="card-text-price-detail">PRECIO: ARS $ {price}</p>
        <p className="card-text-tarjeta-detail">
          💳 12 Cuotas sin interes de {Math.round(price / 12)}
        </p>
        <p className="card-text-detail">Descripcion: {description}</p>
        <Itemcount stock={stock} initial={1} addToCart={addProduct} />
      </div>
    </div>
  );
};

export default ItemDetail;
