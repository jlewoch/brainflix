import React from "react";
import "./ProgressBar.css";
const ProgressBar = ({videoLength, timeWatched}) => {
let watched = () => {
  return Math.floor((timeWatched / videoLength) * 100)
}
  return (
    <div className='progress-container'>
    <div style={{width: `${watched()}%`}} className="played" />
      <div className="progress-bar" />




    </div>
  );
};

export default ProgressBar;
