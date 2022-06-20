import "./Main.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Main() {
  return (
    <div className="container">
      <h2>나만의 아이돌을 만들어보자!</h2>
      <Link to="/create">START</Link>
    </div>
  );
}

export default Main;
