import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setcartProducts] = useState(
    JSON.parse(localStorage.getItem("productos")) || []
  );

  const addProductToCart = (product) => {
    let exist = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );
    if (!exist) {
      setcartProducts((cartProducts) => [...cartProducts, product]);
      localStorage.setItem(
        "productos",
        JSON.stringify([...cartProducts, product])
      );
    }
  };

  const deleteProduct = (product) => {
    setcartProducts(
      cartProducts.filter((cartProduct) => cartProduct.id !== product.id)
    );
    localStorage.setItem(
      "productos",
      JSON.stringify(
        cartProducts.filter((cartProduct) => cartProduct.id !== product.id)
      )
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
    localStorage.setItem(
      "productos",
      JSON.stringify(
        cartProducts.map((e) =>
          e.id === product.id && product.quantity >= 1
            ? { ...e, quantity: product.quantity - 1 }
            : e
        )
      )
    );
  };

  const increasequantity = (product) => {
    setcartProducts(
      cartProducts.map((e) =>
        e.id === product.id && product.quantity >= 0
          ? { ...e, quantity: product.quantity + 1 }
          : e
      )
    );
    localStorage.setItem(
      "productos",
      JSON.stringify(
        cartProducts.map((e) =>
          e.id === product.id && product.quantity >= 0
            ? { ...e, quantity: product.quantity + 1 }
            : e
        )
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

  const emptyCartProducts = () => {
    setcartProducts(cartProducts.splice(0, cartProducts.lenght));
  };

  const data = {
    cartProducts,
    addProductToCart,
    deleteProduct,
    calculeTotalPrice,
    reducequantity,
    increasequantity,
    emptyCartProducts,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
