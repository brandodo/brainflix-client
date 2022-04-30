import React from "react";

export default function Scrubber({ sliderPos, setScrubber, start, end }) {
  return (
    <div className="hero__video-tracker">
      <div className="hero__video-tracker-container">
        <input
          className="hero__video-line"
          type="range"
          min={0}
          max={1}
          step={0.001}
          value={sliderPos || 0}
          onChange={(event) => setScrubber(event.target.valueAsNumber)}
        />
      </div>
      <div className="hero__video-timer">{`${start} / ${end}`}</div>
    </div>
  );
}
