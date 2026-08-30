import React, { useState } from "react";

import SystemHealthPanel from "./Card";
// Child component
function DataDisplay({ label, value }) {
  return (
    <div>
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  );
}

// Parent component
function RobotArmStatus() {
  const temperature = 45;
  const [state, setState] = useState("moving to cup");
  const [message, setMessage] = useState("");

  const toggleTask = () => {
    setState((prev) => {
      const next = prev === "moving to cup" ? "cup is ready" : "moving to cup";
      setMessage(
        next === "moving to cup"
          ? "Robot arm is moving to the cup. Please wait..."
          : "The cup is ready. You can pick it up now.",
      );
      return next;
    });
  };

  return (
    <div>
      <h1>Robot Arm Status</h1>

      <DataDisplay label="Temperature" value={`${temperature}°C`} />
      <button onClick={toggleTask}>Click </button>

      {message && <p>{message}</p>}
    </div>
  );
}

// App component
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <RobotArmStatus />
        <SystemHealthPanel />
      </div>
    </>
  );
}

export default App;
