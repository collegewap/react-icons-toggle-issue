import React, { useState } from "react";
import "./styles.css";
import { BsMoon, BsSun } from "react-icons/bs";

export default function App() {
  const [mode, setMode] = useState("dark");

  const isLight = mode === "light";

  return (
    <div className="App" style={{ background: "#333", height: "100vh" }}>
      <button
        onClick={() => {
          setMode(mode === "light" ? "dark" : "light");
        }}
      >
        Toggle
      </button>
      <br />
      {isLight && <BsMoon size={25} color="#fff" title="Switch to Dark Mode" />}
      {!isLight && (
        <BsSun size={25} color="#ff0" title="Switch to Light Mode" />
      )}
    </div>
  );
}
