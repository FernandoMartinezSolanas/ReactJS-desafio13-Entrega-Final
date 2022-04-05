import React, { useState } from "react";
import Itemcount from "./itemcount";
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  const { id, title, description, price, picture, stock } = data;
  const [productAdded, SetproductAdded] = useState(0);
  const addProduct = (quantity) => {
    SetproductAdded(quantity + productAdded);
  };
  console.log(productAdded);

  return (
    <div className="cardDetail">
      <img src={picture} className="card-img-top-detail" alt={picture} />
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
