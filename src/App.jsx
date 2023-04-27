import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Demo from "./components/Demo";

function App() {
  return (
    <div className="App bg-hero-pattern w-screen h-screen overflow-x-hidden bg-no-repeat bg-fixed bg-cover font-sans">
        <div>
            <Hero />
            <Demo />
        </div>
    </div>
  );
}

export default App;