import { useState } from "react";

function UserWelcome({ name }) {
  return <h1>welcome {name}</h1>;
}

//drinks

function Drinks(params) {
  const [currentDrink, setNewDrink] = useState();
  return (
    <>
      <div>
        {["Espresso", "Americano", "Latte"].map((drink) => (
          <button
            key={drink}
            onClick={() => setNewDrink(drink)}
            style={{ fontWeight: currentDrink === drink ? "bold" : "normal" }}
          >
            {drink}
          </button>
        ))}
      </div>
    </>
  );
}

//
function RobotStatus({ status }) {
  return (
    <p>
      🤖 Robot Status: <strong>{status}</strong>
    </p>
  );
}

//
function BrewButton() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        style={{
          color: "white",
          backgroundColor: "black",
          padding: "8px 12px",
          width: "30%",
          alignItems: "center",
          flex: "center ",
        }}
      >
        Brew My Coffee ☕
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <UserWelcome name={"bilal"} />
      <Drinks />
      <RobotStatus status="Ready" />


      <BrewButton />
    </>
  );
}
export default App;
