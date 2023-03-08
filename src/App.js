import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./container/Header/Header";
import AboutUs from "./container/AboutUs/AboutUs";
import Menu from "./container/Menu/Menu";
import Chef from "./container/Chef/Chef";
import Intro from "./container/Intro/Intro";
import Laurels from "./container/Laurels/Laurels";
import Gallery from "./container/Gallery/Gallery";
import FindUs from "./container/FindUs/FindUs";
import Footer from "./container/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
