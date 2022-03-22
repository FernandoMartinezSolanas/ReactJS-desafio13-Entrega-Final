import React from "react";
import image1 from "../images/porcelanato.jpg";
import image2 from "../images/revestimiento.jpg";
import image3 from "../images/griferia.jpg";
import image4 from "../images/mesadas.jpg";

function Products() {
  return (
    <section className="productos">
      <div className="imageFit">
        <div className="imagenProd">
          <img src={image1} alt="porcelanato" />
        </div>
        <div className="prodTitle">PORCELANATOS</div>
      </div>
      <div className="imageFit">
        <div className="imagenProd">
          <img src={image2} alt="revestimiento" />
        </div>
        <div className="prodTitle">REVESTIMIENTOS</div>
      </div>
      <div className="imageFit">
        <div className="imagenProd">
          <img src={image3} alt="griferia" />
        </div>
        <div className="prodTitle">GRIFERIAS</div>
      </div>
      <div className="imageFit">
        <div className="imagenProd">
          <img src={image4} alt="mesadas" />
        </div>
        <div className="prodTitle">MESADAS</div>
      </div>
    </section>
  );
}

export default Products;
