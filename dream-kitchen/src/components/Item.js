import React, { useContext, useState } from "react";
import Itemcount from "./itemcount";
import "./itemcount.css";
import { Link } from "react-router-dom";
import CartContext from "../context/cartcontext";

function Item({ data }) {
  const { id, title, price, stock, picture, category, image } = data;
  const { addProductToCart } = useContext(CartContext);
  const addProduct = (quantity) => {
    data.quantity = quantity;
    addProductToCart(data);
  };

  return (
    <div className="card">
      <img src={`/images/${image}`} className="card-img-top" alt={picture} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">PRECIO: ARS$ {price}</p>
        <Link to={`/productos/${id}`} className="card-text-anchor">
          Ver detalle
        </Link>
        <Itemcount stock={stock} initial={1} addToCart={addProduct} />
      </div>
    </div>
  );
}

export default Item;
