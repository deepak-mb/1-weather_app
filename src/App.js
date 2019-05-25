import React from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Weather from "./components/Layout/Weather";

function App() {
  return (
    <div className="">
      {/* <Header /> */}
      <div className="App container">
        <Weather />
      </div>
    </div>
  );
}

export default App;
