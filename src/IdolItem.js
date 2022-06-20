import "./IdolItem.css";
import React from "react";

function IdolItem(props) {
  return (
    <div className="card">
      <img src={props.params.src} className="card-img" />
      <div className="card-name">{props.params.name}</div>
      <div className="card-group">{props.params.group}</div>
    </div>
  );
}

export default IdolItem;
