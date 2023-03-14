import React from "react";
import Welcome from "../Welcome/Welcome";
import images from "../../constants/images";
import placeholder from "../../constants/placeholder";
import ChefsProfile from "../../components/ChefsProfiles/ChefsProfile";

function ChefKev() {
  return (
    <div>
      <Welcome title="our chefs profile" />
      <ChefsProfile
        img={images.chef05}
        placeholder={placeholder.chef}
        title="head chef"
        header="kevin lou"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque consectetur adipiscing elit."
        school="graduated from culinary institute of new jersey U.S.A"
        work="worked as a junior chef in ruzo's italiano"
        recipe="contibuted 20+ recipes on international platform"
        train="trained under renowned chef gusteau marcellini"
        signature="kevin lou"
      />
    </div>
  );
}

export default ChefKev;
