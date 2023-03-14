import React from "react";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../constants/placeholder";
import "./Chef.css";

function Chef() {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <LazyLoadImage
          className="lazy-load"
          placeholder={placeholder.chef05}
          effect="blur"
          src={images.chef}
          alt="chef"
        />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="chef's word" />
        <h1 className="headtext__cormorant"> what we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <p className="p__opensans">
            {" "}
            Perferendis, tenetur tempora nam neque quasi quos adipisci explicabo
            esse quidem incidunt accusantium dolor, illo enim excepturi magnam,
            velit itaque quo. Dolor?
          </p>
        </div>
        <div className="app__chef-sign">
          <p>kevin luo</p>
          <p className="p__opensans">chef & founder</p>
          <img src={images.sign} alt="signature" />
        </div>
      </div>
    </div>
  );
}

export default Chef;
