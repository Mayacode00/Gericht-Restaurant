import React from "react";
import "./MenuOptions.css";

function MenuOptions() {
  return (
    <div
      className="app__menu-options"
      id="options"
    >
      <div className="app__menu-options-overlay section__padding">
        <div className="app__menu-options-overlay-text">
          <h1 className="p__cormorant">bar menu</h1>
          <h1 className="p__cormorant">food menu</h1>
          <h1 className="p__cormorant">dessert menu</h1>
        </div>
      </div>
    </div>
  );
}

export default MenuOptions;
