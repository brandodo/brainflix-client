import React from "react";
import "./Button.scss";

function Button({ className, clickHandler, text, disabled }) {
  return (
    <button className={className} onClick={clickHandler} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
