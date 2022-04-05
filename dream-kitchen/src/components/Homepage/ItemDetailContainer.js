import React, { useState, useEffect } from "react";
import { listadoProductos } from "../listado";
import ItemDetail from "../ItemDetail";
import "../ItemDetail.css";
import Spinner from "react-bootstrap/Spinner";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

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
  }, [id]); /*LE agregue el ID*/

  const productfiltered = products.find((x) => x.id == id);

  return (
    <div className="ItemDetailContainer">
      {productfiltered ? (
        <ItemDetail data={productfiltered} />
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default ItemDetailContainer;
