import React from "react";
import "../Homepage/Section.css";
import ItemListContainer from "../Homepage/ItemListContainer";
import "../Homepage/ItemListContainer.css";
import SectionShop from "../SectionShop";

const Shop = () => {
  return (
    <div>
      <SectionShop />
      <ItemListContainer></ItemListContainer>
    </div>
  );
};

export default Shop;
