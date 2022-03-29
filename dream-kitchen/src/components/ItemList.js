import React, { useState, useEffect } from "react";
import Item from "./Item";
import "./Item.css";
import griferiaAugusta from "../images/griferia-augusta.jpg";
import griferiaAromo from "../images/aromo.jpg";
import ecowood from "../images/porcelanato-ecowood.jpeg";
import evolution from "../images/porcelanato-evolution.jpg";
import subwayBlanco from "../images/revestimiento-subway-blanco.jpg";
import subwayNegro from "../images/revestimiento-subway-negro.jpg";
import mesadaBlanca from "../images/mesada-blanca.jpg";
import mesadaNegra from "../images/mesada-negra.jpg";

function ItemList() {
  const listadoProductos = [
    {
      id: 1,
      title: "Augusta",
      description:
        "Juego monocomando para mesada de cocina, con rociador manual extraíble",
      price: 10000,
      picture: griferiaAugusta,
      stock: 10,
    },
    {
      id: 2,
      title: "Aromo",
      description: "Juego monocomando para mesada de cocina",
      price: 8000,
      picture: griferiaAromo,
      stock: 10,
    },
    {
      id: 3,
      title: "Porcelanato Ecowood",
      description:
        "Brinda un estilo contemporáneo y más personal en cada uno de tus ambientes. Su textura y acabado natural brinda posibilidades de diseño exclusivos para espacios interiores y exteriores de tu hogar.",
      price: 10500,
      picture: ecowood,
      stock: 10,
    },
    {
      id: 4,
      title: "Porcelanato Evolution",
      description:
        "Pieza que vuelve tus espacios sofisticados a través de su particular color que se define por su gran consistencia y belleza. Confeccionado para ambientes interiores y exteriores. ",
      price: 10600,
      picture: evolution,
      stock: 10,
    },
    {
      id: 5,
      title: "Subway Blanco",
      description: "Marca: Gabriella, Línea: Subway, Bordes: Biselados",
      price: 5000,
      picture: subwayBlanco,
      stock: 10,
    },
    {
      id: 6,
      title: "Subway Negro",
      description: "Marca: Gabriella, Línea: Subway, Bordes: Rectos",
      price: 4000,
      picture: subwayNegro,
      stock: 10,
    },
    {
      id: 7,
      title: "Calacatta Natura",
      description:
        "Replica el estilo básico del marmol con suaves vetas en gris que acentúan la superficie blanca, a la vez que ofrece un acabado pulido muy brillante y cristalino.",
      price: 50000,
      picture: mesadaBlanca,
      stock: 10,
    },
    {
      id: 8,
      title: "Negro Tebas",
      description:
        "Un clásico que nunca falla. Potente y versatil, este color se complementa a la perfeccion con todo tipo de ambientes, aportando todo su carácter y fuerza.",
      price: 45000,
      picture: mesadaNegra,
      stock: 10,
    },
  ];

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(listadoProductos);
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="ListCont">
      {products.map((product) => {
        const { id } = product;
        return <Item data={product} key={id} />;
      })}
    </div>
  );
}

export default ItemList;
