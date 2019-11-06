import React from "react";
import PropTypes from 'prop-types';
import VideoSuggestionsTemplate from "./video_suggestions_template/VideoSuggestionsTemplate";
import './VideoSuggestions.css';

const VideoSuggestions = ({videos, click, videoEl}) => {
  
    return(
        <div className='video-suggestions'>
        <p>Up Next</p>
        {videos.map( videoobj => 
          
             (
              <VideoSuggestionsTemplate
                key={videoobj.id}
                video={videoobj.image}
                title={videoobj.title}
                channel={videoobj.channel}
                views={videoobj.views}
                length={videoobj.duration}
                id={videoobj.id}
                click={click}
                 
              />
            )
          )}
        </div>
    )
}
VideoSuggestions.propTypes = {
  videos: PropTypes.array.isRequired
}

export default VideoSuggestions;
