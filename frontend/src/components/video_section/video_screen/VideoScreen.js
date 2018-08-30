import React, { Component } from "react";
import "./VideoScreen.css";
import VideoControls from "./video_controls/VideoControls";
class VideoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slider: false,
      videoLength: 0,
      timeWatched: 0,
      paused: true
    };
  }
  fullScreen = () =>{
    this.videoPlayer.webkitRequestFullscreen();
  }
  play = () => {
    this.videoPlayer.play();
    this.setState({paused: !this.state.paused})
  }
  pause = () => {
    this.videoPlayer.pause();
    this.setState({paused: !this.state.paused})
  }
  replay = () =>{
    this.videoPlayer.play()
  }
  toggle = () => {
    this.setState({ slider: !this.state.slider });
  };
  updateWatchTime = () => {
    this.setState({ timeWatched: this.videoPlayer.currentTime });
  };
  

  render() {
    const {paused, slider, videoLength, timeWatched } = this.state;
    
    return (
      <div className="video-screen">
       <div className='video-container'>
      <video
        ref={el => this.videoPlayer = el}
        className="video-screen__image"
        src={this.props.currentvideo.video +''}
        alt="hello"
        onTimeUpdate={this.updateWatchTime}
        onCanPlay={() => setTimeout(
          () => this.setState({ videoLength: this.videoPlayer.duration }),
          1000
        )}
        />
        <VideoControls
          play={this.play.bind(this)}
          pause={this.pause.bind(this)}
          paused={paused}
          slider={slider}
          toggle={this.toggle}
          timeWatched={timeWatched}
          videoLength={videoLength}
          fullScreen={this.fullScreen}
          skip={this.props.skip}
        />
        </div>
      </div>
    );
  }
}

export default VideoScreen;
// el => (this.videoPlayer = el )