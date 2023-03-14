import React from "react";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../constants/placeholder";

function FindUs() {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          find us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            lane ends bungalow, whatcroft hall lane, rudheath, CW9 7SG
          </p>
          <p
            className="p__cormorant"
            style={{ color: "var(--color-golden)", margin: "2rem 0" }}
          >
            opening hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>

        <button className="custom__button" style={{ marginTop: "2rem" }}>
          visit us
        </button>
      </div>

      <div className="app__wrapper_img">
        <LazyLoadImage
          effect="blur"
          className="lazy-load"
          placeholder={placeholder.lemonWater}
          src={images.findus}
          alt="find us"
        />
      </div>
    </div>
  );
}

export default FindUs;
