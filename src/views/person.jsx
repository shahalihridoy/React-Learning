import React, { Component } from "react";
import { Context } from "./provider";

class Person extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Hello Person</h2>
        <Context.Consumer>
          {state => {
            return (
              <React.Fragment>
                <p> {state.name} </p>
                <p> {state.reg} </p>
                <p> {state.age} </p>
                <button onClick={state.click}>Increase Age</button>
              </React.Fragment>
            );
          }}
        </Context.Consumer>
      </div>
    );
  }
}

export default Person;
