import "./IdolItemList.css";
import React, { useState } from "react";
import IdolItem from "./IdolItem";
import Data from "./data";

function IdolItemList() {
  const [idol, setIdol] = useState(Data);
  return (
    <div className="contaniner">
      {idol.map((params) => {
        return <IdolItem params={params} />;
      })}
    </div>
  );
}

export default IdolItemList;
