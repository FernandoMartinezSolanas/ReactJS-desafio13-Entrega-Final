import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setcartProducts] = useState([]);

  const addProductToCart = (product) => {
    let exist = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );
    !exist && setcartProducts((cartProducts) => [...cartProducts, product]);
  };

  const deleteProduct = (product) => {
    console.log(product.id);
    setcartProducts(
      cartProducts.filter((cartProduct) => cartProduct.id !== product.id)
    );
  };

  const calculeTotalPrice = () => {
    let total = 0;
    cartProducts.map((cartProduct) => {
      total = cartProduct.price + total;
    });

    return total;
  };

  const data = {
    cartProducts,
    addProductToCart,
    deleteProduct,
    calculeTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
