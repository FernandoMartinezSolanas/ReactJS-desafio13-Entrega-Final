import React from "react";
import Section from "../Homepage/Section";
import "../Homepage/Section.css";
import ItemListContainer from "../Homepage/ItemListContainer";
import "../Homepage/ItemListContainer.css";
import ItemCategoryContainer from "../ItemCategoryContainer";

const Shop = () => {
  return (
    <div>
      <Section />
      <ItemListContainer></ItemListContainer>
    </div>
  );
};

export default Shop;
