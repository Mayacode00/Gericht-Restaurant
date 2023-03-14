import React from "react";
import images from "../../constants/images";
import "./HistoryDetails.css";

function HistoryDetails(props) {
  return (
    <div className="app__history-details">
      <div className="app__history-details_service-years-subs">
        <h3
          className="p__cormorant"
          style={{
            color: "var(--color-golden)",
            fontSize: "45px",
            lineHeight: "58px",
          }}
        >
          {props.years}
        </h3>
        <p
          className="p__cormorant"
          style={{
            fontSize: "32px",
            fontWeight: "100",
            lineHeight: "42px",
          }}
        >
          {props.title}
        </p>
      </div>
      <div className="app__history-details-dash " />
    </div>
  );
}

export default HistoryDetails;
