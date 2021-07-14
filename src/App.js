import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  };

  render() {
    if (this.state.count > 5) {
      return (
        <div style={{ color: "green" }}>
          {" "}
          <div className="App">
            <button onClick={this.handleDecrement}>-</button>
            {this.state.count}
            <button onClick={this.handleIncrement}>+</button>
          </div>
        </div>
      );
    } else if (this.state.count < 0) {
      return (
        <div style={{ color: "red" }}>
          {" "}
          <div className="App">
            <button onClick={this.handleDecrement}>-</button>
            {this.state.count}
            <button onClick={this.handleIncrement}>+</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <button onClick={this.handleDecrement}>-</button>
          {this.state.count}
          <button onClick={this.handleIncrement}>+</button>
        </div>
      );
    }
  }
}

export default App;
