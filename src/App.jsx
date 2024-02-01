import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
