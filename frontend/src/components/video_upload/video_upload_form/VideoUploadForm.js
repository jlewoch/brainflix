import React from "react";
import "./VideoUploadForm.css";
import { Col, Row } from "react-flexbox-grid";

const VideoUploadForm = ({ formEl, state, changeHandler, submitHandler }) => {
  return (
    <Col md={4}>
      <form name="videoform" ref={formEl} onSubmit={submitHandler.bind(this)}>
        <h2>Basic information</h2>
        <label className="form-label" htmlFor="title">
          Title:
        </label>
        <input
          onChange={changeHandler}
          placeholder="Add a title to your video"
          className={`form-input ${
            state.title !== "" ? "form-input-border" : ""
          }`}
          name="title"
          type="text"
          value={state.title}
          disabled={state.publishing}
        />
        <label className="form-label" htmlFor="description">
          Description:
        </label>
        <textarea
          onChange={changeHandler}
          placeholder="Add a description of your video"
          name="description"
          type="text"
          rows="10"
          className={`form-input form-textarea ${state.title !== '' ? 'form-input-border' : ''}`}
          disabled={state.publishing}
        />
        <label
          className="form-label"
          placeholder="(e.g., albert einstein, flying pig, mashup, videos)"
          htmlFor="tags"
        >
          Tags
        </label>
        <input
          onChange={changeHandler}
          value={state.tags}
          placeholder="(e.g., albert einstein, flying pig, mashup, videos)"
          className={`form-input ${state.title !== '' ? 'form-input-border' : ''}`}
          name="tags"
          type="text"
          disabled={state.publishing}
        />
        <select
          className="form-dropdown"
          name="type"
          id=""
          disabled={state.publishing}
        >
          <option name="public" value="Public">
            Public
          </option>
          <option name="private" value="Private">
            Private
          </option>
        </select>
        <h2>Video Thumbnails</h2>
      </form>
      <Row>
      <Col xs={4}>
      <img className='upload-main-image' src="https://www.w3schools.com/w3css/img_lights.jpg" alt="someImage"/>
      </Col>
      <Col xs={4}>
      <img className='upload-main-image' src="https://www.w3schools.com/w3css/img_lights.jpg" alt="someImage"/>
      </Col>
      <Col xs={4}>
      <img className='upload-main-image' src="https://www.w3schools.com/w3css/img_lights.jpg" alt="someImage"/>
      </Col>
      </Row>
    </Col>
  );
};
export default VideoUploadForm;
