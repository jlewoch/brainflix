import React, { Component } from 'react';
import './App.css';
import NavBar from '../components/nav_bar/NavBar';
import { Route, Redirect } from 'react-router-dom';
import WatchingVideoPage from './WatchingVideoPage';
import VideoUpload from '../components/video_upload/VideoUpload';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => <Redirect to="/watch/1" />} />

        <Route path="/publish" exact render={props => <VideoUpload />} />
        <Route
          path="/watch/:id"
          exact
          render={props => (
            <WatchingVideoPage current={props.match.params.id} />
          )}
        />
      </div>
    );
  }
}
