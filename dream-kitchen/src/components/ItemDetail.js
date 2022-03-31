import React from "react";
import Itemcount from "./itemcount";

const ItemDetail = ({ data }) => {
  const { id, title, description, price, picture, stock } = data;

  return (
    <div className="card">
      <img src={picture} className="card-img-top" alt={picture} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Descripcion: {description}</p>
        <p className="card-text">Precio: Ars {price}</p>
        <Itemcount stock={stock} initial={1} />
      </div>
    </div>
  );
};

export default ItemDetail;
