import React from "react";
import "./UploadSuccessful.css";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
const UploadSuccessful = ({returnToPublish, newUpload}) => {
  
  return (
    <Col className="video-upload-form" md={8}>
          <Row className='success' start="md">
            <Col md={3}>
              <img
                className="upload-main-image"
                src="https://www.w3schools.com/w3css/img_lights.jpg"
                alt="Image"
              /> 
            </Col>
            <Col md={6}>
              <h5>Success!</h5>
              <p>
               {newUpload.title}
              </p>
              <input className='form-input-success' readOnly value={`/watch/${newUpload.id}`} type="text" />
            </Col>
            <Col md={3}>
              <button onClick={returnToPublish} className='return-edit-button'>Return to Editing</button>
             <Link to={`/watch/${newUpload.id}`} >
             <button className='return-edit-button'>Watch Video</button>
           </Link>
             </Col>
          </Row>
        </Col>
  );
};

export default UploadSuccessful;
