import React from "react";
import { Button } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import IdolItemList from "./IdolItemList";

function CreateIdol() {
  return (
    <div>
      <input placeholder="원하는 아이돌을 검색하세요"></input>
      <div>{IdolItemList}</div>
      <Link to="/result">완성</Link>
    </div>
  );
}

export default CreateIdol();
