import React from "react";
import { Routes, Route } from "react-router-dom";
import { WatchListContextProvider } from "./context/watchListContext";
import StockDetailPage from "./projects/StockApp/pages/StockDetailPage";
import StockOverviewPage from "./projects/StockApp/pages/StockOverviewPage";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import "./App.css";

function App() {
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
            <Route path="/stocks" element={<StockOverviewPage />} />
            <Route
              path="/stocks/detail/:symbol"
              element={<StockDetailPage />}
            />
          </Routes>
          <Footer />
        </div>
      </WatchListContextProvider>
    </>
  );
}

export default App;
