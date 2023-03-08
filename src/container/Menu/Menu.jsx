import React from "react";
import "./Menu.css";
import images from "../../constants/images";
import data from "../../constants/data";
import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from "../../components/MenuItem/MenuItem";

function Menu() {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="menu that fits your palette" />
        <h1 className="headtext__cormorant">today's special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app_specialMenu-menu_heading">wine & beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app_specialMenu-menu_heading">cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktails, index) => (
              <MenuItem
                key={cocktails.title + index}
                title={cocktails.title}
                price={cocktails.price}
                tags={cocktails.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          view more
        </button>
      </div>
    </div>
  );
}

export default Menu;
