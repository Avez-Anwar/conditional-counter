import React, { useState } from "react";
import "./styles.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter - 1);
  };

  const handleDecrement = () => {
    setCounter(counter + 1);
  };

  if (counter < 0) {
    return (
      <div style={{ color: "red" }} className="App">
        <button onClick={handleIncrement}>-</button>
        {counter}
        <button onClick={handleDecrement}>+</button>
      </div>
    );
  } else if (counter > 5 && counter < 10) {
    return (
      <div style={{ color: "violet" }} className="App">
        <button onClick={handleIncrement}>-</button>
        {counter}
        <button onClick={handleDecrement}>+</button>
      </div>
    );
  } else if (counter >= 10) {
    return (
      <div style={{ color: "skyblue" }} className="App">
        <button onClick={handleIncrement}>-</button>
        {counter}
        <button onClick={handleDecrement}>+</button>
      </div>
    );
  } else {
    return (
      <div style={{ color: "green" }} className="App">
        <button onClick={handleIncrement}>-</button>
        {counter}
        <button onClick={handleDecrement}>+</button>
      </div>
    );
  }
}

export default App;
