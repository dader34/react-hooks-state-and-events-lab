import React from "react";
import { useState } from "react";

function Item({ name, category }) {
const [inCart,setInCart] = useState(false)
const inCartValue = inCart ? "in-cart" : ""

const handleClick = () =>{
  setInCart(!inCart)
}

  return (
    <li className={inCartValue}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
