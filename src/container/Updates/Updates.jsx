import React from "react";
import "./Updates.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import SubHeadingHeader from "../../components/SubHeading/SubHeadingHeader";
import { Link } from "react-router-dom";
import data from "../../constants/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BlogsCard = ({
  update: { imgUrl, person, title, paragraph, date, link },
}) => (
  <div className="app__updates_blog-card-details">
    <div className="app__updates_blog-card-details-img">
      <LazyLoadImage className="lazy-load" src={imgUrl} alt="blog-img" effect="blur" />
    </div>
    <div className="app__updates_blog-card-details-notes">
      <div className="app__updates_blog-card-details-name">
        <p className="p__opensans">{date}</p>
        <p className="p__opensans">{person}</p>
      </div>
      <div className="app__updates_blog-card-details-title">
        <div>
          <Link to="/blogs" className="p__cormorant link">
            {title}
          </Link>
        </div>
        <br></br>
        <p className="p__opensans" style={{ fontSize: "14px" }}>
          {paragraph}
        </p>
      </div>
      <Link
        to="/blogs"
        className="p__cormorant"
        style={{ fontSize: "16px", color: "var(--color-golden)" }}
      >
        {link}
      </Link>
    </div>
  </div>
);

function Updates() {
  return (
    <div className="app__updates section__padding flex__center" id="updates">
      <div className="app__updates_blog">
        <SubHeading title="blogs" />
        <SubHeadingHeader title="gericht updates" />
        <div className="app__updates_blog-card">
          {data.updates.map((update) => (
            <BlogsCard update={update} key={update.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Updates;
