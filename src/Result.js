import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Result() {
  return (
    <div>
      <p>당신의 아이돌을 공유해보세요</p>
      <div>사진</div>
      <Link to="/create">다시만들기</Link>
    </div>
  );
}

export default Result();
