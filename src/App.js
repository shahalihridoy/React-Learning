import React, { Component } from "react";
import "./App.css";
import Provider from "./views/provider";
import People from "./views/people";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider>
          <People />
        </Provider>
      </div>
    );
  }
}

export default App;
