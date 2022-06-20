import React from "react";
import { Button } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Idol from "./Idol";

function Create() {
  return (
    <div>
      <input placeholder="원하는 아이돌을 검색하세요"></input>
      <div>{Idol}</div>
    </div>
  );
}

export default Create();
