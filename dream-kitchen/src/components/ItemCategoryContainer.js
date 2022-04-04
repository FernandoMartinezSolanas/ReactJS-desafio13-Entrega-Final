import React, { useState, useEffect } from "react";
import { listadoProductos } from "./listado";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Item from "./Item";

const ItemCategoryContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  console.log(category);

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
  }, [category]); /*LE agregue la CATEGORIA*/

  const productfiltered = products.filter((x) => x.category === category);
  console.log(productfiltered);

  return (
    <div className="ListCont">
      {productfiltered.map((product) => {
        const { id } = product;
        return <Item data={product} key={id} />;
      })}
    </div>
  );
};

export default ItemCategoryContainer;
