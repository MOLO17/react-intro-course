import React, { Component } from "react";

import logo from "./logo.svg";
import Counter from "./components/Counter";
import Caption from "./components/Caption";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Caption prominence={1}>Welcome on board!</Caption>
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;
