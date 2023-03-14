import React from "react";
import "./ChefsProfile.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import images from "../../constants/images";

function ChefsProfile(props) {
  return (
    <div className="app__chefs-profile  section__padding" id="chefs-profile">
      <div className="app__chefs-profile_img">
        <LazyLoadImage
          className="lazy-load"
          effect="blur"
          placeholder={props.placeholder}
          src={props.img}
          alt="chef"
        />
      </div>

      <div className="app__chefs-profile_words">
        <div>
          <p className="p__cormorant">{props.title}</p>
          <img src={images.spoon} alt="spoon" className="spoon__img" />
          <h1
            className="p__cormorant"
            style={{
              color: "var(--color-golden)",
              fontSize: "55px",
              lineHeight: "50px",
            }}
          >
            {props.header}
          </h1>
        </div>
        <div className="app__chefs-profile_words-achievement">
          <p className="p__opensans" style={{ fontStyle: "italic" }}>
            {props.paragraph}
          </p>
          <div className="app__chefs-profile_words-achievement-school">
            <p className="p__cormorant">{props.school}</p>
            <p className="p__cormorant">{props.work}</p>
            <p className="p__cormorant">{props.recipe}</p>
            <p className="p__cormorant">{props.train}</p>
          </div>
          <p className="p__bestermind">{props.signature}</p>
        </div>
      </div>
    </div>
  );
}

export default ChefsProfile;
