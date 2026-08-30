import React from "react";

class App extends React.Component {
  state = {
    favoriteColor: "red",
  };

  shouldComponentUpdate() {
    return true;
    // return false;
  }

  changeColor = () => {
    this.setState({
      favoriteColor: "blue",
    });
  };

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>

        <button onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}

export default App;