import React from "react";
import Login from "./components/Login";
import Goals from "./components/Goals";
import Roadmap from "./components/Roadmap";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div>
      <h1>Adaptive Learning Pathways</h1>

      <Login />
      <Goals />
      <Roadmap />
      <Quiz />

    </div>
  );
}

export default App;