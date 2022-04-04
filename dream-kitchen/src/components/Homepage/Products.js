import React from "react";
import image1 from "../../images/porcelanato.jpg";
import image2 from "../../images/revestimiento.jpg";
import image3 from "../../images/griferia.jpg";
import image4 from "../../images/mesadas.jpg";
import { Link } from "react-router-dom";

function Products() {
  return (
    <section className="productos">
      <div className="imageFit">
        <div className="imagenProd">
          <Link to={"/porcelanato"}>
            <img src={image1} alt="porcelanato" />
          </Link>
        </div>
        <div className="prodTitle">
          <Link to={"/porcelanato"}>PORCELANATOS</Link>
        </div>
      </div>
      <div className="imageFit">
        <div className="imagenProd">
          <Link to={"/revestimiento"}>
            <img src={image2} alt="revestimiento" />
          </Link>
        </div>
        <div className="prodTitle">
          <Link to={"/revestimiento"}>REVESTIMIENTOS</Link>
        </div>
      </div>
      <div className="imageFit">
        <div className="imagenProd">
          <Link to={"/griferia"}>
            <img src={image3} alt="griferia" />
          </Link>
        </div>
        <div className="prodTitle">
          <Link to={"/griferia"}>GRIFERIAS</Link>
        </div>
      </div>
      <div className="imageFit">
        <div className="imagenProd">
          <Link to={"/mesada"}>
            <img src={image4} alt="mesadas" />
          </Link>
        </div>
        <div className="prodTitle">
          <Link to={"/mesada"}>MESADAS</Link>
        </div>
      </div>
    </section>
  );
}

export default Products;
