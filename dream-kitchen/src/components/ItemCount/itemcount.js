import React, { useState, useContext } from "react";
import WidgetContext from "../../context/widgetcontext";

function ItemCount(props) {
  const [count, setCount] = useState(1);
  const { handleShow } = useContext(WidgetContext);

  const add = () => {
    if (count === props.stock) {
    } else {
      setCount(count + 1);
    }
  };

  const reduce = () => {
    if (count === 0) {
    } else {
      setCount(count - 1);
    }
  };

  const onAdd = () => {
    props.addToCart(count);
    handleShow();
  };

  return (
    <div>
      <div className="Itemcount">
        <button onClick={reduce} className="btn btn-primary quantity">
          {"-"}
        </button>
        <div className="quantity">{count}</div>
        <button onClick={add} className="btn btn-primary">
          {"+"}
        </button>
      </div>
      <div className="addcart">
        <button onClick={onAdd} className="add">
          🛒 Añadir al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
