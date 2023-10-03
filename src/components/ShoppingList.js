import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [list,setList] = useState(items)

  const newItems = list.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  const handleChange = (event) =>{
    const filterArr = items.filter((element) =>{
      return event.target.value !== "All" ? element.category === event.target.value : element
    })
    setList(filterArr)

  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
