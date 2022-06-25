import "./IdolItem.css";
import React, { useState } from "react";

function IdolItem(props) {
  const selectedItem = props.selectedItem;
  const setSelectedItem = props.setSelectedItem;

  return (
    <div
      className="card"
      onClick={() => {
        let selectedItemCopy = [...selectedItem];
        selectedItemCopy.push(props.params.id);
        setSelectedItem(selectedItemCopy);
        console.log(selectedItem);
      }}
    >
      <img src={props.params.src} className="card-img" />
      <div className="card-name">{props.params.name}</div>
      <div className="card-group">{props.params.group}</div>
    </div>
  );
}

export default IdolItem;
