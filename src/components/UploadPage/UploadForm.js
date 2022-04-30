import React from "react";
import { Link } from "react-router-dom";
import UploadThumbnail from "./UploadThumbnail";
import UploadTitle from "./UploadTitle";
import UploadDescription from "./UploadDescription";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";

export default function UploadForm({
  videoTitle,
  videoDescription,
  userImage,
  handleInput,
  handleForm,
}) {
  return (
    <form className="upload__publish-form" onSubmit={handleForm}>
      <div className="upload__publish-video-wrapper">
        <div className="upload__publish-thumb-wrapper">
          <UploadThumbnail handleInput={handleInput} image={userImage} />
        </div>
        <div className="upload__publish-video-fields">
          <UploadTitle videoTitle={videoTitle} handleInput={handleInput} />
          <UploadDescription
            videoDescription={videoDescription}
            handleInput={handleInput}
          />
        </div>
      </div>
      <Divider className="upload__divider" />
      <div className="upload__publish-container">
        <Button
          className={
            videoTitle === "" || videoDescription === ""
              ? "upload__publish btn btn--disabled"
              : "upload__publish btn btn-hover"
          }
          text="PUBLISH"
          disabled={videoTitle === "" || videoDescription === "" ? true : false}
        />
        <Link to="/">
          <Button
            className="upload__publish-cancel btn btn-hover"
            text="CANCEL"
          />
        </Link>
      </div>
    </form>
  );
}
