import React from "react";
import Welcome from "../../container/Welcome/Welcome";
import ChefsProfile from "../../components/ChefsProfiles/ChefsProfile";
import placeholder from "../../constants/placeholder";
import images from "../../constants/images";

function ChefChoi() {
  return (
    <div>
      <Welcome title="our chefs profile" />
      <ChefsProfile
        img={images.chef01}
        placeholder={placeholder.chef01}
        title="deputy chef"
        header="patrick choi"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque consectetur adipiscing elit."
        school="graduated from culinary institute of new jersey U.S.A"
        work="worked as a junior chef i ruzo's italiano"
        recipe="contibuted 20+ recipes on international platform"
        train="trained under renowned chef gusteau marcellini"
        signature="patrick choi"
      />
    </div>
  );
}

export default ChefChoi;
