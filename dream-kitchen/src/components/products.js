import React from "react";
import image1 from "../images/porcelanato.jpg";
import image2 from "../images/revestimiento.jpg";
import image3 from "../images/griferia.jpg";
import image4 from "../images/mesadas.jpg";

function Products() {
  return (
    <section class="productos">
      <div class="imageFit">
        <div class="imagenProd">
          <img src={image1} alt="porcelanato" />
        </div>
        <div class="prodTitle">PORCELANATOS</div>
      </div>
      <div class="imageFit">
        <div class="imagenProd">
          <img src={image2} alt="revestimiento" />
        </div>
        <div class="prodTitle">REVESTIMIENTOS</div>
      </div>
      <div class="imageFit">
        <div class="imagenProd">
          <img src={image3} alt="griferia" />
        </div>
        <div class="prodTitle">GRIFERIAS</div>
      </div>
      <div class="imageFit">
        <div class="imagenProd">
          <img src={image4} alt="mesadas" />
        </div>
        <div class="prodTitle">MESADAS</div>
      </div>
    </section>
  );
}

export default Products;
