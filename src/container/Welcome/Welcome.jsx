import React from "react";
import "./Welcome.css";

function Welcome(props) {
  return (
    <div className="app__welcome welcome__bg flex__center">
      <div className="app__welcome-overlay flex__center">
        <div className="app__welcome-overlay-text flex__center">
          <h1
            className="p__cormorant"
            style={{
              color: "var(--color-golden)",
              lineHeight: "70px",
            }}
          >
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
