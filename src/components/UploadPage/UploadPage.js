import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UploadForm from "./UploadForm";
import Divider from "../Divider/Divider";
import Title from "../Title/Title";
import "./UploadPage.scss";
import thumbnailImage from "../../assets/images/Upload-video-preview.jpg";
import axios from "axios";

export default class UploadPage extends Component {
  state = {
    videoTitle: "",
    videoDescription: "",
    userImage: thumbnailImage,
    userImageFile: null,
    redirectHome: false,
  };

  handleInput(event) {
    if (event.target.files) {
      let urlString = URL.createObjectURL(event.target.files[0]);

      this.setState({
        userImage: urlString,
        userImageFile: event.target.files[0],
      });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  handleForm(event) {
    event.preventDefault();
    if (this.state.userImage === thumbnailImage) {
      return alert("Please upload a custom thumbnail image");
    }

    let formData = new FormData();
    formData.append("file", this.state.userImageFile);
    formData.append("title", this.state.videoTitle);
    formData.append("description", this.state.videoDescription);

    axios
      .post(
        `${this.props.BACKEND_API_URL}/videos?api_key=${this.props.API_KEY}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });

    alert("Video has been uploaded!");
    this.setState({ redirectHome: true });
  }

  render() {
    const goHome = this.state.redirectHome;

    if (goHome) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <Divider />
        <section className="upload">
          <Title className="upload__title title" title="Upload Video" />
          <Divider className="upload__divider" />
          <UploadForm
            videoTitle={this.state.videoTitle}
            videoDescription={this.state.videoDescription}
            userImage={this.state.userImage}
            handleInput={(event) => this.handleInput(event)}
            handleForm={(event) => this.handleForm(event)}
          />
        </section>
      </>
    );
  }
}
