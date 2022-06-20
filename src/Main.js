import React from "react";
import { Button } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <h2>나만의 아이돌을 만들어보자!</h2>
      <Button variant="primary">
        <Link to="/create">START</Link>
      </Button>{" "}
    </div>
  );
}

export default Main();
