import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const ItemCategoryContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

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
  }, [category]);

  const productfiltered = products.filter((x) => x.category === category);

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
