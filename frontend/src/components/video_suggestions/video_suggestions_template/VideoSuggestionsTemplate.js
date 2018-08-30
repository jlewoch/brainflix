import React from "react";
import "./VideoSuggestionsTemplate.css";
import { Link } from 'react-router-dom';


const VideoSuggestionsTemplate = ({
  id,
  video,
  title,
  views,
  length,
  channel,
  click,
}) => {

  const viewsConverter = () => {
    let thousands = Math.floor(views / 1000)
    let converted = ''
    if (thousands > 1000) {
      let millions = thousands.toString().charAt(0)
      thousands = thousands.toString().charAt(1)
      converted = `${millions}.${thousands}M`
    } else if(thousands > 1) {
      converted = `${thousands}K`
    }
    return converted
  }

  return (
    <Link id={id} onClick={() => click(id)} to={`/watch/` + id} style={{textDecoration: 'none'}} className="video-suggestions-item">
      <div className="video-suggestions-item-left">
        <img
          className="video-suggestions-item-left__image"
          src={video}
          alt="Video sugestion screenshot"
        />
        <div className='video-suggestions-item-left__length'>
        <p className="video-suggestions-item-left__length--text">{length}</p>
        </div>
        
      </div>
      <div className="video-suggestions-item-right">
        <h4 className="video-suggestions-item-right__title">{title}</h4>
        <h5 className="video-suggestions-item-right__channel">{channel}</h5>
        <h5 className="video-suggestions-item-right__views">{viewsConverter() + ' views'}</h5>
      </div>
    </Link>
  );
};


export default VideoSuggestionsTemplate;
