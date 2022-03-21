import React from "react";
import image1 from "../images/porcelanato.jpg";

function ItemProd() {
  return (
    <div class="card">
      <img src={image1} class="card-img-top" alt="Porcelanato" />
      <div class="card-body">
        <h5 class="card-title">Porcelanato</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default ItemProd;
