import "./IdolItem.css";
import React, { useState } from "react";

function IdolItem(props) {
  let selectedItemArr = [];
  const [selectedItem, setSelectedItem] = useState(selectedItemArr);
  let selectedItemCopy = [...selectedItem];
  selectedItemCopy.push(props.params.id);
  setSelectedItem(selectedItemCopy);
  console.log(selectedItem);

  return (
    <div className="card" onClick={() => {}}>
      <img src={props.params.src} className="card-img" />
      <div className="card-name">{props.params.name}</div>
      <div className="card-group">{props.params.group}</div>
    </div>
  );
}

export default IdolItem;
