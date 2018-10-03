import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        {" "}
        {/* use this instead of adding a <div>*/}
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
