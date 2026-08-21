import React from "react";

// 1. Reusable Card component
function Card({ title, children }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "350px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{title}</h2>

      {children}
    </div>
  );
}

// 2. Reusable StatusRow component
function StatusRow({ deviceName, status, indicatorColor }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <span>{deviceName}</span>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: indicatorColor,
            display: "inline-block",
          }}
        ></span>

        <span>{status}</span>
      </div>
    </div>
  );
}

// 3. Parent component
function SystemHealthPanel() {
  return (
    <Card title="Hardware Health">
      <StatusRow
        deviceName="Dobot Arm"
        status="Online"
        indicatorColor="green"
      />

      <StatusRow
        deviceName="Tuya Fingerbot"
        status="Pending"
        indicatorColor="yellow"
      />

      <StatusRow
        deviceName="Coffee Machine"
        status="Working"
        indicatorColor="Blue"
      />
    </Card>
  );
}

export default SystemHealthPanel;
