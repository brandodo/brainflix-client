import React from "react";
import "./Divider.scss";

function Divider({ className }) {
  return <hr className={"divider " + className}></hr>;
}

export default Divider;
