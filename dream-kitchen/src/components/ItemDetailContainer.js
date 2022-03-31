import React, { useState, useEffect } from "react";
import { listadoProductos } from "./listado";
import ItemDetail from "./ItemDetail";
import "./ItemDetail.css";

const ItemDetailContainer = ({ id }) => {
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
      setProducts(data.find((x) => x.id === id));
    });
  }, [id]);

  return (
    <div>
      {console.log(products)}
      {products ? (
        <ItemDetail data={products} />
      ) : (
        <p>Obteniendo producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

//{product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
