import React, { Component, createRef } from "react";
import VideoUploadForm from "./video_upload_form/VideoUploadForm";
import "./VideoUpload.css";
import { Row, Col, Grid } from "react-flexbox-grid";
import VideoUploadProgress from "./video_upload_progress/VideoUploadProgress";
import UploadSuccessful from './upload_success/UploadSuccessful';
class VideoUpload extends Component {
constructor(props) {
  super(props);
  this.state = {
    complete:false,
    publishing: false,
    title: '',
    description:'',
    tags: '',
    thumnails:[],
    newUpload:[]
  }
  this.formEl = createRef();
}

onChangeHandler = (event) =>{
  this.setState({[event.target.name]: event.target.value});

}

submitHandler = (event) =>{

  let data = {
    "title": this.state.title,
    "description": this.state.description,
    tags: this.state.tags
  }
  fetch("http://127.0.0.1:8080/videos", {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      "Content-Type": "application/json"
    }
  }).then( response => response.json()).then( data =>
   this.setState({newUpload: data, complete: true})
  ).catch(err => console.log(err)
  )
}

publish = () => {
  this.setState({ publishing: !this.state.publishing });
this.submitHandler()
}
returnToPublish = () => {
  this.setState({  
    complete:false,
    publishing: false,
    title: '',
    description:'',
    tags: '',
    thumnails:[],
    newUpload:[]})
};

  render() {
    const {publishing, thumnails, complete, newUpload} = this.state;
    
    return (
      <Grid fluid className="video-upload">
        <Row center="md">
        {complete && newUpload !== [] ? <UploadSuccessful returnToPublish={this.returnToPublish} newUpload={this.state.newUpload} /> :  <Col className="video-upload-form" md={8}>
            <Row
              start="md"
              className="video-upload-form-start"
            > 
              <Col md={3}>
              <img className='upload-main-image' src="https://www.w3schools.com/w3css/img_lights.jpg" alt="Main Video"/>
              </Col>
              <VideoUploadProgress formEl={this.formEl} publish={this.publish} publishing={publishing}/>
            </Row>
            <Row
              className="video-upload-form-end"
              start="md"
              center="xs"
            >
              <Col md={3}>
                <h2 className="video-upload__status-label">Upload Status</h2>
                {publishing ? (
                  <p className="video-upload__status">publishing</p>
                ) : (
                  <p className="video-upload__status">Idle</p>
                )}
              </Col>
              <VideoUploadForm  formEl={this.formEl} state={this.state} submitHandler={this.submitHandler} changeHandler={this.onChangeHandler}/>
            </Row>
          </Col>}
        </Row>
      </Grid>
    );
  }
}
export default VideoUpload;
