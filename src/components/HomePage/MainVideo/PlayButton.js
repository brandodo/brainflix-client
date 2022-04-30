import React from "react";
import playButton from "../../../assets/images/icons/Icon-play.svg";
import pauseButton from "../../../assets/images/icons/Icon-pause.svg";

export default function PlayButton({ play, playPauseHandler }) {
  return (
    <button className="hero__video-play" onClick={playPauseHandler}>
      <img src={play === true ? pauseButton : playButton} alt="play-pause" />
    </button>
  );
}
