import React, { Component } from "react";
import {
  MainVideo,
  VideoDetails,
  VideoPlaylist,
  CommentsSection,
  Divider,
} from "../index";
import axios from "axios";

export default class HomePage extends Component {
  state = {
    videoData: [],
    mainVideo: {},
  };

  fetchData(url) {
    const { match } = this.props;

    axios
      .get(url)
      .then((response) => {
        const initialVideoId = response.data[0].id;
        this.setState({ videoData: response.data });
        return match.url === "/" ? initialVideoId : match.params.id;
      })
      .then((response) => {
        this.fetchMainVideo(
          `${this.props.BACKEND_API_URL}/videos/${response}?api_key=${this.props.API_KEY}`
        );
      })
      .catch((error) => {
        alert("Could not fetch data from API");
        console.log(error);
      });
  }

  fetchMainVideo(url) {
    axios
      .get(url)
      .then((response) => this.setState({ mainVideo: response.data }))
      .catch((error) => {
        alert(`Could not fetch main video from API ${error}`);
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.id;
    const currId = this.props.match.params.id;
    const currUrl = this.props.match.url;

    if (prevId !== currId) {
      if (currUrl !== "/") {
        this.fetchMainVideo(
          `${this.props.BACKEND_API_URL}/videos/${currId}?api_key=${this.props.API_KEY}`
        );
      } else {
        this.fetchData(
          `${this.props.BACKEND_API_URL}/videos?api_key=${this.props.API_KEY}`
        );
      }
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }

  componentDidMount() {
    this.fetchData(
      `${this.props.BACKEND_API_URL}/videos?api_key=${this.props.API_KEY}`
    );
  }

  render() {
    const { match } = this.props;

    const makePlaylist = () => {
      let currentList = this.state.videoData.filter(
        (video) => video.id !== this.state.mainVideo.id
      );

      return currentList;
    };

    const postComment = (event, id, comment) => {
      event.preventDefault();

      axios
        .post(
          `${this.props.BACKEND_API_URL}/videos/${id}/comments?api_key=${this.props.API_KEY}`,
          {
            name: "Mark Hass Brown Lee",
            comment: comment,
          }
        )
        .then(() =>
          this.fetchMainVideo(
            `${this.props.BACKEND_API_URL}/videos/${id}?api_key=${this.props.API_KEY}`
          )
        )
        .catch((error) => {
          alert("Could not post comment, please try again");
          console.log(error);
        });
    };

    const deleteComment = (videoId, commentId) => {
      axios
        .delete(
          `${this.props.BACKEND_API_URL}/videos/${videoId}/comments/${commentId}?api_key=${this.props.API_KEY}`
        )
        .then(() =>
          this.fetchMainVideo(
            `${this.props.BACKEND_API_URL}/videos/${videoId}?api_key=${this.props.API_KEY}`
          )
        )
        .catch((error) => {
          alert("Failed to delete comment");
          console.log(error);
        });
    };

    const updateLikes = (videoId) => {
      axios
        .put(
          `${this.props.BACKEND_API_URL}/videos/${videoId}?api_key=${this.props.API_KEY}`
        )
        .then(() => {
          this.fetchMainVideo(
            `${this.props.BACKEND_API_URL}/videos/${videoId}?api_key=${this.props.API_KEY}`
          );
        })
        .catch((err) => console.log(err));
    };

    return (
      <>
        <MainVideo
          mainVideo={this.state.mainVideo}
          serverUrl={this.props.BACKEND_API_URL}
          match={match}
        />
        <div className="main-wrapper">
          <div className="body-wrapper">
            <VideoDetails
              data={this.state.mainVideo}
              updateLikes={updateLikes}
            />
            <CommentsSection
              videoId={this.state.mainVideo.id}
              comments={this.state.mainVideo.comments}
              formHandler={postComment}
              deleteComment={deleteComment}
            />
          </div>
          <Divider />
          <VideoPlaylist
            data={makePlaylist()}
            serverUrl={this.props.BACKEND_API_URL}
          />
        </div>
      </>
    );
  }
}
