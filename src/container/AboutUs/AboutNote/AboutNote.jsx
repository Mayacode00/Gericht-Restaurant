import React from "react";
import "./AboutNote.css";
import SubHeading from "../../../components/SubHeading/SubHeading";
import SubHeadingHeader from "../../../components/SubHeading/SubHeadingHeader";

function AboutNote() {
  return (
    <div className="app__about-note flex__center" id="about-note">
      <div className="app__about-note_header">
        <SubHeading title="about us" />
        <SubHeadingHeader title="happy hours with us" />
        <p
          className="p__opensans"
          style={{ lineHeight: "28px", margin: "2rem 0" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
      </div>
    </div>
  );
}

export default AboutNote;
