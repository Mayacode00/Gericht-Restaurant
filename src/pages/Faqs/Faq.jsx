import React from "react";
import Welcome from "../../container/Welcome/Welcome";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import images from "../../constants/images";
import placeholder from "../../constants/placeholder";
import "./Faq.css";

function Faq() {
  return (
    <div>
      <Welcome title="frequently asked questions" />
      <div className="app__faqs section__padding" id="faqs">
        <div className="app__faqs_img">
          <LazyLoadImage
            className="lazy-load"
            placeholder={placeholder.bar}
            effect="blur"
            src={images.bar}
            alt="bar-faqs"
          />
        </div>
        <div className="app__faqs_questions">
          <h1 className="p__cormorant">how do i reach the restaurant</h1>
          <p className="p__opensans">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="app__faqs_qestions-frequent">
            <p className="p__cormorant">is there a restaurant required?</p>
            <p className="p__cormorant">
              can i host an event at the restaurant?
            </p>
            <p className="p__cormorant">
              is valet parking available at the restaurant?
            </p>
            <p className="p__cormorant">
              what are the happy hours of your bar?
            </p>
            <p className="p__cormorant">
              is seafood available at your restaurant?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
