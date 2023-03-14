import React from "react";
import "./Quality.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import SubHeadingHeader from "../../components/SubHeading/SubHeadingHeader";

function Quality() {
  return (
    <div
      className="app__quality-service flex__center section__padding"
      id="quality"
    >
      <div className="app__quality-service_note">
        <SubHeading title="service quality" />
        <div className="app__quality-service_note-offer">
          <SubHeadingHeader title=" we at gericht are serving our customers over a decade" />
          <p
            className="p__opensans"
            style={{
              margin: "40px 0",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
        </div>
        <div className="app__quality-service_button">
          <button className="custom__button">read more</button>
          <button className="custom__button">our service</button>
        </div>
      </div>
    </div>
  );
}

export default Quality;
