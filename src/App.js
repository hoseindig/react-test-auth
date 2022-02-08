import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./component/loginForm";
import Register from "./component/registerForm";
import "./App.css";
import Navebar from "./navbar";
function App() {
  return (
    <div>
      <Navebar />
      <div className="container">
        <Routes>
          <Route path="/" exec element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
