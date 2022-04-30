import React from "react";
import fullscreen from "../../../assets/images/icons/Icon-fullscreen.svg";
import volumeIcon from "../../../assets/images/icons/Icon-volume.svg";
import muteIcon from "../../../assets/images/icons/icon-mute.png";

export default function SecondaryControls({
  fullscreenHandler,
  volumeClick,
  volume,
}) {
  return (
    <div className="hero__video-right">
      <img
        src={fullscreen}
        className="hero__video-fullscreen"
        alt="fullscreen"
        onClick={fullscreenHandler}
      />
      <img
        src={volume === 0 ? muteIcon : volumeIcon}
        className="hero__video-volume"
        alt="volume"
        onClick={() => volumeClick()}
      />
    </div>
  );
}
