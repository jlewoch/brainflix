import React, { Component} from "react";
import VideoSuggestions from "../components/video_suggestions/VideoSuggestions";
import VideoSection from "../components/video_section/VideoSection";


export default class WatchingVideoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: [],
      fetchingData: true
    };
  }

getSideVideos = () => {
  fetch("http://127.0.0.1:8080/videos",{
    method: 'GET',
    // mode: 'no-cors',
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {this.setState({
          videos: data.filter(
            item => item.id.toString() !== this.props.current
          )})
  }).then(info => this.state.currentVideo !== [] ? 
    this.setState({fetchingData: false}) : ''
  )
  .catch(err => console.log(err));
}

  getVideoHandler = (id) => {

    fetch(`http://127.0.0.1:8080/videos/${id}`,{
    method: 'GET',
    // mode: 'no-cors',
    headers:{
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
      .then(data => {this.setState({ 
        currentVideo: data})
      }).then(info => this.state.videos !== [] ? 
        this.setState({fetchingData: false}) : ''
      )
      .catch(err => console.log(err));
  };

  videoChanged = id => {
    this.setState({fetchingData: true})
    this.getVideoHandler(id);
    this.getSideVideos()
  };

  componentDidMount() {
    this.videoChanged(this.props.current);

  }

  render() {
    const { videos, currentVideo, comments } = this.state;


    
    if (this.state.fetchingData) {
      return <h1>LOADING</h1>;
    }

    return (
      <div ref={el => this.elements = el} className="video-section-container">
        <VideoSection skip={this.skipVideo} videoEl={this.videoPlayer} currentId={this.props.current} currentvideo={currentVideo} />
        <VideoSuggestions  videos={videos} change={this.videoChanged} />
      </div>
    );
  }
}
