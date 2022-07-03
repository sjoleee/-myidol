import "./IdolItem.css";
import React, { useState } from "react";

function IdolItem(props) {
  const selectedItem = props.selectedItem;
  const setSelectedItem = props.setSelectedItem;
  const id = props.params.id;

  const itemSelect = (arr, id) => {
    arr.push(id);
    setSelectedItem(arr);
  };

  const itemDeselect = (arr, id) => {
    arr.splice(arr.indexOf(id), 1);
    setSelectedItem(arr);
  };

  return (
    <div
      className="card"
      onClick={() => {
        let selectedItemCopy = [...selectedItem];
        selectedItemCopy.indexOf(id) === -1
          ? itemSelect(selectedItemCopy, id)
          : itemDeselect(selectedItemCopy, id);
        console.log(selectedItemCopy, id);
      }}
    >
      <img src={props.params.src} className="card-img" />
      <div className="card-name">{props.params.name}</div>
      <div className="card-group">{props.params.group}</div>
    </div>
  );
}

export default IdolItem;
