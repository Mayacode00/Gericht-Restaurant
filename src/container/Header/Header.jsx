import React from "react";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Header.css";

function Header() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavor" />
        <h1 className="app__header-h1">the key to fine dining</h1>
        <p className="p__opensans" style={{ margin: "2rem, 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button className="custom__button">explore menu</button>
      </div>
      <div className="app__wrapper_img">
        <img
          src={images.welcome}
          alt="header img"
          style={{ height: "500px" }}
        />
      </div>
    </div>
  );
}

export default Header;
