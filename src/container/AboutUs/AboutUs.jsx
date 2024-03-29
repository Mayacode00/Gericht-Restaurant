import React from "react";
import "./AboutUs.css";
import images from "../../constants/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../constants/placeholder";

function AboutUs() {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">about us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="custom__button" type="button">
            know more
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <LazyLoadImage
            className="lazy-load"
            placeholder={placeholder.knife}
            effect="blur"
            src={images.knife}
            alt="about_knife"
          />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">our history</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="custom__button" type="button">
            know more
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
