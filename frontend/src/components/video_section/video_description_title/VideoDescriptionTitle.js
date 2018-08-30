import React from "react";
import "./VideoDescriptionTitle.css";
import ShareIcon from "./icons/ShareIcon";
import ThumbsDownIcon from "./icons/ThumbsDownIcon";
import ThumbsUpIcon from "./icons/ThumbsUpIcon";

const VideoDescriptionTitle = ({ currentvideo }) => {
  return (
    <section className="video-description-title">
      <div className="video-title">
        <h3 className="video-title__label">{currentvideo.title}</h3>
        <div className="video-title-controls">
          <div className="video-title-controls__title">
            <p>{currentvideo.views + " views"}</p>
          </div>
          <div className="video-title-controls__controls">
            <div className="video-title-controls__controls-icon">
              <ThumbsUpIcon />
              <p>{currentvideo.thumbsUp}</p>
            </div>
            <div className="video-title-controls__controls-icon">
              <ThumbsDownIcon />
              <p>{currentvideo.thumbsDown}</p>
            </div>
            <div className="video-title-controls__controls-icon">
              <ShareIcon />
              <p>SHARE</p>
            </div>
          </div>
        </div>
        <div className="divider" />
      </div>

      <div className="video-description">
        <img
          className="video-description__image"
          src={require("../../nav_bar/icons/profile.jpg")}
          alt=""
        />
        <div className="video-description-start">
          <div className="description-text">
            <div className="description-text__info">
              <h4 className="description-text__channel">{currentvideo.channel}</h4>
              <p className="description-text__published">
                {"Published on " + currentvideo.published}
              </p>
            </div>
            <button className="subscribe-button">
              SUBSCRIBE{<div className="subs">{currentvideo.subscriberCount}</div>}
            </button>
          </div>
          <div className="video-description-end">
            <p className="description-text__description">
              {`10/14/15: `}{currentvideo.description}
            </p>

            <h4 className="description-text__button">SHOW MORE</h4>
       
          </div>
       
        </div>
      </div>
      <div className="divider" ></div>
    </section>
  );
};
export default VideoDescriptionTitle;
