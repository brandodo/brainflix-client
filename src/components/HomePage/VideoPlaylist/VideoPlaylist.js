import React, { Component } from "react";
import VideoList from "./VideoList";
import "./VideoPlaylist.scss";

export default class VideoPlaylist extends Component {
  render() {
    return (
      <section className="playlist">
        <h3 className="playlist__header">NEXT VIDEOS</h3>
        <VideoList
          data={this.props.data}
          serverUrl={this.props.serverUrl}
        />
      </section>
    );
  }
}
