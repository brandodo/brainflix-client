import ProfilePic from "../../ProfilePic/ProfilePic";
import Button from "../../Button/Button";
import CommentBox from "./CommentBox";
import { Component } from "react/cjs/react.production.min";

export default class Form extends Component {
  state = {
    comment: "",
  };

  commentChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event, id, comment, formHandler) {
    if (comment === "") {
      event.preventDefault();
      return false;
    } else {
      formHandler(event, id, comment);
    }
  }

  render() {
    const { videoId, commentCount, formHandler } = this.props;
    return (
      <div className="comments__container">
        <p className="comments__counter">{commentCount + " Comment(s)"}</p>
        <div className="comments__wrapper">
          <ProfilePic
            className={"comments__pic profile-pic profile-pic--image"}
          />
          <form
            className="comments__form"
            onSubmit={(event) => {
              this.handleSubmit(
                event,
                videoId,
                this.state.comment,
                formHandler
              );

              this.setState({ comment: "" });
            }}
          >
            <div className="comments__form-wrapper">
              <h3 className="comments__form-header">JOIN THE CONVERSATION</h3>
              <p
                className={
                  this.state.comment === ""
                    ? "comments__form-warning--invalid"
                    : "comments__form-warning"
                }
              >
                COMMENT CANNOT BE BLANK!
              </p>
            </div>
            <CommentBox
              comment={this.state.comment}
              changeHandler={(event) => this.commentChange(event)}
              handleEnterSubmit={(event) => this.handleEnterSubmit(event)}
            />
            <Button
              className={
                this.state.comment === ""
                  ? "comments__form-btn btn btn--disabled"
                  : "comments__form-btn btn btn-hover"
              }
              text={"COMMENT"}
              disabled={this.state.comment === "" ? true : false}
            />
          </form>
        </div>
      </div>
    );
  }
}
