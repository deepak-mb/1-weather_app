import React from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Weather from "./components/Layout/Weather";

function App() {
  return (
    <div className="App container">
      <Header />
      <Weather />
    </div>
  );
}

export default App;
