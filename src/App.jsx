import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
