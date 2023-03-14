import React from "react";
import Welcome from "../../container/Welcome/Welcome";
import History from "../../container/History/History";
import AboutNote from "../../container/AboutUs/AboutNote/AboutNote";
import HappyHours from "../../components/HappyHours/HappyHours";
import Testimony from "../../container/Testimony/Testimony";
import Gallery from "../../container/Gallery/Gallery";

function About() {
  return (
    <div>
      <Welcome title="welcome to gericht"/>
      <History />
      <AboutNote />
      <HappyHours />
      <Testimony/>
      <Gallery/>
    </div>
  );
}

export default About;
