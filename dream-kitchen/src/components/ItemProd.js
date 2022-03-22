import React from "react";
import image1 from "../images/porcelanato.jpg";
import Itemcount from "./itemcount";
import "./itemcount.css";

function ItemProd() {
  return (
    <div className="card">
      <img src={image1} className="card-img-top" alt="Porcelanato" />
      <div className="card-body">
        <h5 className="card-title">Porcelanato</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Itemcount stock={5} initial={50} />
      </div>
    </div>
  );
}

export default ItemProd;
