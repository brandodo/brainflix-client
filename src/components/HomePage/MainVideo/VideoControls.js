import React from "react";
import moment from "moment";
import PlayButton from "./PlayButton";
import Scrubber from "./Scrubber";
import SecondaryControls from "./SecondaryControls";
import VolumeScrubber from "./VolumeScrubber";

export default function VideoControls({
  play,
  playPauseHandler,
  duration,
  sliderPos,
  currentTime,
  setScrubber,
  fullScreenHandler,
  volumeClick,
  setVolume,
  volume,
  showVolume,
}) {
  const startTime = moment.utc(currentTime * 1000).format("mm:ss");
  const endTime = moment.utc(duration * 1000).format("mm:ss");

  return (
    <div className="hero__video-controls">
      <PlayButton play={play} playPauseHandler={playPauseHandler} />
      <Scrubber
        sliderPos={sliderPos}
        setScrubber={setScrubber}
        start={startTime}
        end={endTime}
      />
      <SecondaryControls
        fullscreenHandler={fullScreenHandler}
        volumeClick={volumeClick}
        volume={volume}
      />

      <VolumeScrubber
        setVolume={setVolume}
        volume={volume}
        showVolume={showVolume}
      />
    </div>
  );
}
