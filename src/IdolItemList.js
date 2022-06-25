import "./IdolItemList.css";
import React, { useState } from "react";
import IdolItem from "./IdolItem";
import Data from "./data";

function IdolItemList() {
  const [idol, setIdol] = useState(Data);

  let selectedItemArr = [];
  const [selectedItem, setSelectedItem] = useState(selectedItemArr);

  return (
    <div className="contaniner">
      {idol.map((params) => {
        return (
          <IdolItem
            params={params}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        );
      })}
    </div>
  );
}

export default IdolItemList;
