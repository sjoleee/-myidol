import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div>홈버튼</div>
      <div>
        <h2>나만의 아이돌을 만들어보자!</h2>
        <Button variant="primary">START</Button>{" "}
      </div>
    </div>
  );
}

export default App;
