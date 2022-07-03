import "./CreateIdol.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import IdolItemList from "./IdolItemList";
import SelectedIdolItemList from "./SelectedIdolItemList";

function CreateIdol() {
  return (
    <div className="container">
      <input placeholder="원하는 아이돌을 검색하세요"></input>
      <IdolItemList />
      <div>
        <SelectedIdolItemList />
        <Link to="/result">완성</Link>
      </div>
    </div>
  );
}

export default CreateIdol;
