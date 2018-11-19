import React, { Component } from "react";
import "./App.css";

import MoviePreferido from "./Components/MoviePreferido.jsx";


class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviePreferido />
      </div>
    );
  }
}

export default App;


