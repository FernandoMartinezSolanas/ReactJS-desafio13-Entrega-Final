import React, { useState } from "react";

function ItemCount(props) {
  const [count, setCount] = useState(1);

  const onAdd = () => {
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

  return (
    <div>
      <div className="Itemcount">
        <button onClick={reduce} className="btn btn-primary quantity">
          {"-"}
        </button>
        <div className="quantity">{count}</div>
        <button onClick={onAdd} className="btn btn-primary">
          {"+"}
        </button>
      </div>
      <div className="addcart">
        <button type="button" className="add">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
