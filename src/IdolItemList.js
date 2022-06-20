import "./IdolItemList.css";
import React, { useState } from "react";
import IdolItem from "./IdolItem";
import Data from "./data";

function IdolItemList() {
  const [idol, setIdol] = useState(Data);
  return (
    <div className="contaniner">
      {idol.map((params, idx) => {
        return <IdolItem params={params} idx={idx} idol={idol} key={idx} />;
      })}
    </div>
  );
}

export default IdolItemList;
