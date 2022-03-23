import React, { useState } from "react";

function ItemCount(props) {
  const [count, setCount] = useState(1);
  console.log(props.stock);

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
    alert(count + " items fueron agregados a tu carrito");
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
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
