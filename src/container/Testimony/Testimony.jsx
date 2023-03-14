import React from "react";
import "./Testimony.css";
import data from "../../constants/data";
import SubHeading from "../../components/SubHeading/SubHeading";
import SubHeadingHeader from "../../components/SubHeading/SubHeadingHeader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CustomerCard = ({
  customer: { imgUrl, imgUrl01, note, person, job },
}) => (
  <div className="app__testimony-card">
    <div className="app__testimony-card-img">
      <LazyLoadImage id="img" effect="blur" src={imgUrl} alt="customer-img" />
      <img
        src={imgUrl01}
        alt="quote"
        className="app__testimony-card-img-quote"
      />
    </div>
    <div className="app__testimony-card-review">
      <p
        className="p__opensans"
        style={{ fontStyle: "italic", fontSize: "14px" }}
      >
        {note}
      </p>
      <div className="app__testimony-card-note_customer-details">
        <p
          className="p__cormorant"
          style={{
            fontSize: "25px",
            color: "var(--color-golden)",
            fontWeight: "200",
          }}
        >
          {person}
        </p>
        <p className="p__opensans">{job}</p>
      </div>
    </div>
  </div>
);

function Testimony() {
  return (
    <div
      className="app__testimony flex__center section__padding"
      id="testimony"
    >
      <div>
        <SubHeading title="testimony" />
        <SubHeadingHeader title="happy customers" />
      </div>
      <div className="app__testimony-card_box">
        {data.customers.map((customer) => (
          <CustomerCard customer={customer} key={customer.title} />
        ))}
      </div>
    </div>
  );
}

export default Testimony;
