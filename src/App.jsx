import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
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
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
