import React from "react";
import { Col, Row } from "react-flexbox-grid";
import "./VideoUploadProgress.css";

const VideoUploadProgress = ({publish, publishing}) => {

    return (
      <Col middle="md" md={9}>
        <Row start="md">
          <Col md={9}>
            <div className="publish-progress-container">
              <div
                className={`publish-progress ${
                  publishing ? "start-publishing" : ""
                }`}
              />
            </div>
            <h4 className="publish-save-label progress">Processing 80%</h4>
            <p className="publish-save-label progress1">
              * Click “Publish” to make your video live.
            </p>
          </Col>
          <Col md={3}>
            <Row end="md">
              <Col md={12}>
                <button onClick={publish} className={`publish-button`}>
                  Publish
                </button>
                <p className="publish-save-label">
                  {publishing ? "Draft Saved" : ""}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  
}

export default VideoUploadProgress;
