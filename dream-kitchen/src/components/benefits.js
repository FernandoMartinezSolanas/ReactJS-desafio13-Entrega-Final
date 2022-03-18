import React from "react";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";

function Benefits() {
  return (
    <section class="newSection">
      <div class="servicio">
        <img src={image1} />
        <h3>Envíos a todo el país</h3>
      </div>
      <div class="servicio">
        <img src={image2} />
        <h3>Retiro en Tienda</h3>
      </div>
      <div class="servicio">
        <img src={image3} />
        <h3>3 cuotas sin interés</h3>
      </div>
      <div class="servicio">
        <img src={image4} />
        <h3>15% OFF Transferencia</h3>
      </div>
    </section>
  );
}

export default Benefits;
