import React, { Component } from "react";
import { Context } from "./provider";
import Person from "./person";

class Family extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Hello Family</h2>
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

        <Person />
      </div>
    );
  }
}

export default Family;
