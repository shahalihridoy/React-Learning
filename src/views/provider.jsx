import React, { Component } from "react";

export const Context = React.createContext();

class Provider extends Component {
  // this will control the nested child
  state = {
    name: "shah ali",
    reg: "201333370232",
    age: 24
  };

  handleClick = () => {
    this.setState({ age: ++this.state.age });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, click: this.handleClick }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
