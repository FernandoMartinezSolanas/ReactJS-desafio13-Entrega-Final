import React from "react";
import image1 from "../images/porcelanato.jpg";
import Itemcount from "./itemcount";
import "./itemcount.css";

function ItemProd() {
  return (
    <div className="card">
      <img src={image1} className="card-img-top" alt="Porcelanato" />
      <div className="card-body">
        <h5 className="card-title">Porcelanato Natur</h5>
        <p className="card-text">Acabado: Natural Bordes: Rectificado</p>
        <Itemcount stock={5} initial={1} />
      </div>
    </div>
  );
}

export default ItemProd;
