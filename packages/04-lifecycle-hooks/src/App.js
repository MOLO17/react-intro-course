import React, { Component } from "react";

import Timer from "./components/Timer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Timer />
        </header>
      </div>
    );
  }
}

export default App;
