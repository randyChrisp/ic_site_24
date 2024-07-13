import React from "react";
import { Routes, Route } from "react-router-dom";
import { WatchListContextProvider } from "./context/watchListContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Carousel from "./components/Carousel";
import About from "./pages/About";
import Projects from "./pages/Projects";
import CapStatement from "./pages/CapStatement";
import StockOverviewPage from "./projects/StockApp/pages/StockOverviewPage";
import StockDetailPage from "./projects/StockApp/pages/StockDetailPage";
import CocktailsPage from "./projects/CocktailApp/pages/CocktailsPage";
import Balloons from "./components/Balloons";
import "./App.css";

export default function App() {
  return (
    <>
      <WatchListContextProvider>
        <Loader />
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cap" element={<CapStatement />} />
            <Route path="/stocks" element={<StockOverviewPage />} />
            <Route
              path="/stocks/detail/:symbol"
              element={<StockDetailPage />}
            />
            <Route path="/cocktails" element={<CocktailsPage />} />
          </Routes>
          <Footer />
        </div>
      </WatchListContextProvider>
    </>
  );
}
