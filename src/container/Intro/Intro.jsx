import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import Meal from "../../assets/meal.mp4";
import "./Intro.css";

function Intro() {
  const [playVideo, setplayVideo] = React.useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={Meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#ffffff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#ffffff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Intro;
