import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Create from "./Create";
import Result from "./Result";

function App() {
  return (
    <div className="App">
      <Link to="/">홈버튼</Link>
      <Routes>
        <Route path="/" element={Main} />
        <Route path="/create" element={Create} />
        <Route path="/result" element={Result} />
      </Routes>
    </div>
  );
}

export default App;
