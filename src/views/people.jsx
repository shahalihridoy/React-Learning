import React, { Component } from "react";
import { Context } from "./provider";
import Family from "./family";

class People extends Component {
  render() {
    return (
      <div>
        <h2>Hello People</h2>
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

        <Family />
      </div>
    );
  }
}

export default People;
