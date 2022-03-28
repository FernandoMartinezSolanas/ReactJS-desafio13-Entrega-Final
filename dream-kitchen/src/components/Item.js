import React from "react";
import Itemcount from "./itemcount";
import "./itemcount.css";

function Item({ data }) {
  const { id, title, price, stock, picture } = data;
  return (
    <div className="card">
      <img src={picture} className="card-img-top" alt={picture} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Precio: Ars {price}</p>
        <Itemcount stock={stock} initial={1} />
      </div>
    </div>
  );
}

export default Item;
