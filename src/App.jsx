import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  let increment = () => setCounter(counter + 1);
  let decrement = () => setCounter(counter - 1);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "inter, sans-serif",
      }}
    >
      <div
        style={{
          marginTop: "50px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "17px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            textAlign: "center",
            fontWeight: "600",
            letterSpacing: "-0.02em",
            margin: 0,
            padding: 0,
          }}
        >
          Counter App
        </h1>

        <p
          style={{
            fontSize: "40px",
            fontWeight: "600",
            textAlign: "center",
            letterSpacing: "-0.02em",
            height: "40px",
            margin: 0,
            padding: 0,
          }}
        >
          Count: {counter}
        </p>
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={increment}
          style={{
            fontSize: "16px",
            padding: "10px 20px",
            borderRadius: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "solid 2px #45a049",
            cursor: "pointer",
          }}
        >
          Increment
        </button>
        <button
          onClick={decrement}
          style={{
            fontSize: "16px",
            padding: "10px 20px",
            borderRadius: "10px",
            backgroundColor: "#f44336",
            color: "white",
            border: "solid 2px #da190b",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
