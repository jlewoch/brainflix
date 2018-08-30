import React, { Component, createRef } from "react";
import "./VideoSection.css";
import VideoScreen from "./video_screen/VideoScreen";
import VideoDescriptionTitle from "./video_description_title/VideoDescriptionTitle";
import Comments from "./comments/Comments";
class VideoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: '',
      currentComments: [],
      loading: true
    }
    this.formEl = createRef();
  }
  submitComment = () => {
    fetch(`http://127.0.0.1:8080/videos/${this.props.currentvideo.id}/comments`,{
      method: 'post',
      body: JSON.stringify({name:'Jake Lewochko', comment: this.state.commentInput}),
      headers:{
        "Content-Type": "application/json"
      }
  }).then( response => response.json()).then( data => {this.setState({commentInput: '', currentComments: [...data]})}
    ).catch(err => console.log(err)
    )
  }
  comments = () => {
    fetch(`http://127.0.0.1:8080/videos/${this.props.currentId}`)
      .then(response => response.json())
      .then(data => {this.setState({ currentComments: [...data.comments], loading: false })
      })
      .catch(err => console.log(err));
  }
  removeComment = (event) => {    
    let url=`http://127.0.0.1:8080/videos/${this.props.currentvideo.id}/comments/${event.target.id}`
    fetch(url,{
      method:'delete'
    })
    .then( response => response.json())
    .then( data => this.setState({currentComments: [...data]})).catch(err => console.log(err)
    )
  }
  changeHandler = (event) => {
    this.setState({commentInput: event.target.value})
  }
componentDidMount(){
  this.comments()
}


  render() {
    const {currentvideo ,videoEl, skip} = this.props;
    if (this.state.loading) {
      return <h1>Loading</h1>
    }
    return (
      <div className="video-section">
        <VideoScreen skip={skip}  videoEl={videoEl} currentvideo={currentvideo} />
        <VideoDescriptionTitle currentvideo={currentvideo} />
        <Comments removeComment={this.removeComment} commentInput={this.state.commentInput} changeHandler={this.changeHandler} formEl={this.formEl} submitComment={this.submitComment} currentComments={this.state.currentComments.sort((a,b)=> b.id - a.id)}/>

      </div>
    );
  }
}
export default VideoSection;