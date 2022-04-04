import React from "react";
import Itemcount from "./itemcount";
import "./itemcount.css";
import { Link } from "react-router-dom";

function Item({ data }) {
  const { id, title, price, stock, picture, category } = data;
  return (
    <div className="card">
      <img src={picture} className="card-img-top" alt={picture} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">PRECIO: ARS$ {price}</p>
        <Link to={`/productos/${id}`} className="card-text-anchor">
          Ver detalle
        </Link>
        <Itemcount stock={stock} initial={1} />
      </div>
    </div>
  );
}

export default Item;
