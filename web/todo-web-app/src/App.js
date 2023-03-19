import React from "react";
import "./App.css";
import "./common/fonts/Mark-Pro.ttf";
import { ToDo } from "./features/todo/ToDo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDo />
      </header>
    </div>
  );
}

export default App;
