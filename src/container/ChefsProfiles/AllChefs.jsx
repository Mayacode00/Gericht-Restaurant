import React from "react";
import data from "../../constants/data";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import "./AllChefs.css";

const ChefsRole = ({ chef: { imgUrl, chefName, role, link } }) => (
  <div className="app__all-chefs_profiles-tile">
    <div className="app__all_chefs_profiles-tile-name">
      <div className="app__all_chefs_profiles-tile-name-img flex__center">
        <LazyLoadImage
          id="img"
          className="lazy-load"
          effect="blur"
          src={imgUrl}
          alt="chef"
        />
        <div className="app__all_chefs-images_card">
          <div className="all_chefs__image-icon">
            <BsTwitter className="all_chefs__image-icons" />
            <BsInstagram className="all_chefs__image-icons" />
            <BsFacebook className="all_chefs__image-icons" />
          </div>
          <div className="app__chefs_link">
            <div />
            <Link
              to={link}
              className="p__cormorant"
              style={{
                fontSize: "15px",
                color: "var(--color-golden)",
                cursor: "pointer",
              }}
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h1
          className="p__cormorant"
          style={{ lineHeight: "3rem", fontWeight: "300", fontSize: "32px" }}
        >
          {chefName}
        </h1>
        <p className="p__opensans" style={{ fontSize: "12px" }}>
          {role}
        </p>
      </div>
    </div>
  </div>
);

function AllChefs() {
  return (
    <div className="app__all-chefs" id="chefs">
      <div className="app__all-chefs_profiles">
        {data.chefs.map((chef) => (
          <ChefsRole chef={chef} key={chef.title} />
        ))}
      </div>
    </div>
  );
}

export default AllChefs;
