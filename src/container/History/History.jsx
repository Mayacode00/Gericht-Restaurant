import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import data from "../../constants/data";
import "./History.css";
import HistoryDetails from "../../components/HistoryDetails/HistoryDetails";
import SubHeadingHeader from "../../components/SubHeading/SubHeadingHeader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../constants/placeholder";

function History() {
  return (
    <div className="app__history flex__center section__padding " id="history">
      <div className="app__history-heading">
        <SubHeading title="our history" />
        <SubHeadingHeader title="serving customer for over a decade" />
      </div>
      <div className="app__history_service">
        <div className="app__history_service-note">
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <div className="app__history-note-img">
            <LazyLoadImage
              className="lazy-load-door"
              effect="blur"
              placeholder={placeholder.door}
              src={images.door}
              alt="door"
            />
          </div>
        </div>
        <div className="app__history_service-years">
          <div className="app__history_service-years-img">
            <LazyLoadImage
              className="lazy-load-entrance"
              effect="blur"
              placeholder={placeholder.entrance}
              src={images.entrance}
              alt="entrance"
            />
          </div>
          <div className="app__history-service-years-note">
            <h1
              className="p__cormorant"
              style={{
                fontSize: "40px",
                color: "var(--color-golden)",
                lineHeight: "58px",
              }}
            >
              {" "}
              over the years
            </h1>
            <p className="p__opensans" style={{ margin: "2rem 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
          </div>
          <div className="app__history_service-years-award">
            {data.histories.map((histories, index) => (
              <HistoryDetails
                key={histories.title + index}
                years={histories.years}
                title={histories.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
