import React, { Component } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
