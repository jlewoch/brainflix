import React from "react";
import PauseIcon from "./icons/PauseIcon";
import FullScreenIcon from "./icons/FullScreenIcon";
import ReplayIcon from "./icons/ReplayIcon";
import SkipIcon from "./icons/SkipIcon";
import VolumeIcon from "./icons/VolumeIcon";
import VolumeSlider from "./icons/VolumeSlider";
import "./VideoControls.css";
import ProgrssBar from "../../../progress_bar/ProgressBar";

const VideoControls = ({
  toggle,
  slider,
  play,
  paused,
  pause,
  timeWatched,
  videoLength,
  fullScreen,
  skip
}) => {
  const addZero = e => {
    let num = e;
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  };
  const formatTime = time => {
    let min = time / 60;
    let sec = time % 60;
    return addZero(Math.floor(min)) + ":" + addZero(Math.floor(sec));
  };

  return (
    <div className="video-controls">
      <ProgrssBar timeWatched={timeWatched} videoLength={videoLength} />
      <div className="video-controls-container">
        <div className="video-controls-left">
          {timeWatched !== videoLength ? (
            <PauseIcon pause={paused ? play : pause} />
          ) : (
            <ReplayIcon play={play} />
          )}
          <SkipIcon skip={skip}/>
          <VolumeIcon toggle={toggle} />
          {slider ? <VolumeSlider toggle={toggle} /> : ""}
          <p className="volume-control-icon">
            {formatTime(Math.floor(timeWatched))} / {formatTime(videoLength)}
          </p>
        </div>
        <div className="video-controls-right">
          <FullScreenIcon fullScreen={fullScreen} />
        </div>
      </div>
    </div>
  );
};

export default VideoControls;
