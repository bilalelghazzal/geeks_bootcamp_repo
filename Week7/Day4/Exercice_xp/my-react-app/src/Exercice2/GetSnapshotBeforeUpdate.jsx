import React from "react";

class App extends React.Component {
  state = {
    favoriteColor: "red",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favoriteColor: "yellow",
      });
    }, 3000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  render() {
    return (
      <h1>
        My favorite color is {this.state.favoriteColor}
      </h1>
    );
  }
}

export default App;