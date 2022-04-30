import React, { Component } from "react";
import "./MainVideo.scss";
import VideoControls from "./VideoControls";

export default class MainVideo extends Component {
  state = {
    play: false,
    videoDuration: 0,
    sliderPos: 0,
    currentTime: 0,
    showVolume: false,
    volume: 1,
  };

  myRef = React.createRef();

  componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url) {
      this.setState({
        play: false,
        videoDuration: this.myRef.current.duration,
      });
    }

    if (prevProps.mainVideo.id !== this.props.mainVideo.id) {
      this.myRef.current.load();
      this.setState({ sliderPos: 0, currentTime: 0 });
    }
  }

  render() {
    if (!this.props.mainVideo) return;
    const image = this.props.mainVideo.image;
    const video = this.props.mainVideo.video;

    const setDuration = () => {
      this.setState({ videoDuration: this.myRef.current.duration });
    };

    const playPause = () => {
      const playVideo = !this.state.play;

      playVideo ? this.myRef.current.play() : this.myRef.current.pause();
      this.setState({ play: !this.state.play });
    };

    const updateTimeElapsed = () => {
      const timePos =
        this.myRef.current.currentTime / this.myRef.current.duration;

      this.setState({
        sliderPos: timePos,
        currentTime: this.myRef.current.currentTime,
      });

      if (this.myRef.current.ended) {
        this.setState({ play: false });
      }
    };

    const getFullScreen = () => {
      this.myRef.current.requestFullscreen();
    };

    const setScrubber = (num) => {
      this.myRef.current.currentTime = num * this.state.videoDuration;

      this.setState({
        sliderPos: num,
        currentTime: num * this.state.videoDuration,
      });
    };

    const volumeClick = () => {
      this.setState({ showVolume: !this.state.showVolume });
    };

    const setVolume = (number) => {
      this.myRef.current.volume = number;
      this.setState({ volume: number });
    };

    return (
      <section
        className="hero"
        onMouseLeave={() => this.setState({ showVolume: false })}
      >
        <video
          className="hero__video"
          poster={`${this.props.serverUrl}/${image}`}
          ref={this.myRef}
          onLoadedMetadata={() => setDuration()}
          onTimeUpdate={() => updateTimeElapsed()}
          onClick={() => playPause()}
        >
          <source src={`${this.props.serverUrl}/${video}`} type="video/mp4" />
        </video>
        <VideoControls
          play={this.state.play}
          playPauseHandler={playPause}
          duration={Math.floor(this.state.videoDuration)}
          sliderPos={this.state.sliderPos}
          currentTime={this.state.currentTime}
          fullScreenHandler={getFullScreen}
          setScrubber={setScrubber}
          volumeClick={volumeClick}
          setVolume={setVolume}
          showVolume={this.state.showVolume}
          volume={this.state.volume}
        />
      </section>
    );
  }
}
