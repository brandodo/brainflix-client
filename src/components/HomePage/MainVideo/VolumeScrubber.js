import React from "react";

export default function VolumeScrubber({ setVolume, volume, showVolume }) {
  return (
    <div
      className={
        showVolume
          ? "hero__video-volume-container hero__video-volume-container--show"
          : "hero__video-volume-container"
      }
    >
      <input
        className="hero__video-volume-scrubber"
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={volume}
        onChange={(event) => {
          setVolume(event.target.valueAsNumber);
        }}
      />
    </div>
  );
}
