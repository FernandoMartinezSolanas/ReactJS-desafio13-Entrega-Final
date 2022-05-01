import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemDetail/ItemDetail.css";
import Spinner from "react-bootstrap/Spinner";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getProduct = async () => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let product = docSnap.data();
      product.id = docSnap.id;
      setProduct(product);
    } else {
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      {product ? (
        <ItemDetail data={product} />
      ) : (
        <div className="Spinner">
          <Spinner animation="grow" variant="secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
