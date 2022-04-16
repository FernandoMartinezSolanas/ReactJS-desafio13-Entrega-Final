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

  const reducequantity = (product) => {
    setcartProducts(
      cartProducts.map((e) =>
        e.id === product.id && product.quantity >= 1
          ? { ...e, quantity: product.quantity - 1 }
          : e
      )
    );
  };

  const increasequantity = (product) => {
    setcartProducts(
      cartProducts.map((e) =>
        e.id === product.id && product.quantity >= 1
          ? { ...e, quantity: product.quantity + 1 }
          : e
      )
    );
  };

  const calculeTotalPrice = () => {
    let total = 0;
    cartProducts.map((cartProduct) => {
      total = cartProduct.price * cartProduct.quantity + total;
    });

    return total;
  };

  const data = {
    cartProducts,
    addProductToCart,
    deleteProduct,
    calculeTotalPrice,
    reducequantity,
    increasequantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
