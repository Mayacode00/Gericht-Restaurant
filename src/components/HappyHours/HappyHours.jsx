import React from "react";
import "./HappyHours.css";
import Welcome from "../../container/Welcome/Welcome";

function HappyHours() {
  return (
    <div
      className="app__happy-hours happy-hour__bg flex__center"
      id="happy-hours"
    >
      <div className="app__happy-hours-overlay flex__center">
        <div className="app__happy-hours-overlay-text flex__center">
          <h1 className="p__cormorant" style={{ fontSize: "110px", color: "var(--color-golden)" }}>
            happy hours
          </h1>
          <h1 className="p__cormorant" style={{ lineHeight: "158px" }}>
            monday - friday (4:00 Pm - 9:00 Pm)
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HappyHours;
