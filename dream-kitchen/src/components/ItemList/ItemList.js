import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import "../Item/Item.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";

function ItemList() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const itemscollection = collection(db, "productos");
    const productsSnapshot = await getDocs(itemscollection);
    const productList = productsSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return productList;
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
