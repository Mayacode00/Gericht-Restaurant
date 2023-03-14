import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "././pages/Home/Home";
import About from "././pages/About/About";
import Services from "././pages/Services/Services";
import Footer from "./container/Footer/Footer";
import Chefs from "./pages/Chefs/Chefs";
import ChefChoi from "./container/ChefsProfiles/ChefsChoi";
import "./App.css";
import ChefKev from "./container/ChefsProfiles/ChefKev";
import Faq from "./pages/Faqs/Faq";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/chefs/chefchoi" element={<ChefChoi />} />
          <Route path="/chefs/chefkev" element={<ChefKev />} />
          <Route path="/faq" element={<Faq/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
