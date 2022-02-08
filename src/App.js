import { Routes, Route } from "react-router-dom";

import auth from "./services/authService";
import Home from "./home";
import Login from "./component/loginForm";
import Register from "./component/registerForm";
import "./App.css";
import Navebar from "./navbar";

import React, { Component } from "react";
class App extends Component {
  state = { user: null };
  componentDidMount() {
    const user = auth.getCurrentUser();
    if (user) this.setState({ user });
  }
  render() {
    return (
      <div>
        <Navebar user={this.state.user} />
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
}

export default App;
