import React from "react";

import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Slider from "./Components/Slider";
import Categories from "./Components/Categories";
import Latest from "./Components/Latest";
import Popular from "./Components/Popular";
import Quote from "./Components/Quote";
import Random from "./Components/Random";
import InstagramFeed from "./Components/InstagramFeed";
import SubscribeBlock from "./Components/SubscribeBlock";
import Footer from "./Components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Slider />
      <Categories />
      <Latest />
      <Popular />
      <Quote />
      <Random />
      <InstagramFeed />
      <SubscribeBlock />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
