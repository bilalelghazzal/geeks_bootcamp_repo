import React, { Component } from "react";

class BuggyCounter extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error("I crashed!");
    }

    return (
      <h2 onClick={this.handleClick}>
        Counter : {this.state.counter}
      </h2>
    );
  }
}

export default BuggyCounter;
// Fin 