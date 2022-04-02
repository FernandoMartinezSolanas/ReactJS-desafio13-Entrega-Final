import React from "react";
import Section from "../Homepage/Section";
import "../Homepage/Section.css";
import Benefits from "../Homepage/Benefits";
import "../Homepage/Benefits.css";
import Products from "../Homepage/Products";
import "../Homepage/Products.css";
import ItemListContainer from "../Homepage/ItemListContainer";
import "../Homepage/ItemListContainer.css";
import "../Homepage/ItemDetailContainer.css";
import ItemDetailContainer from "../Homepage/ItemDetailContainer";

const Homepage = () => {
  return (
    <div>
      <Section />
      <Benefits />
      <Products />
      <ItemListContainer />
      <ItemDetailContainer id={5} />
    </div>
  );
};

export default Homepage;
