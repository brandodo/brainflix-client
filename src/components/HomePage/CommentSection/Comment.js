import Moment from "react-moment";
import CommentDelete from "./CommentDelete";

export default function Comment({
  videoId,
  id,
  userName,
  userComment,
  timestamp,
  deleteComment,
}) {
  return (
    <div id={id} className="comments__user-container">
      <div className="comments__user-left profile-pic"></div>
      <div className="comments__user-right">
        <div className="comments__user-header">
          <p className="comments__user-name">{userName}</p>
          <Moment className="comments__user-date" fromNow unix>
            {timestamp / 1000}
          </Moment>
          <CommentDelete
            deleteComment={deleteComment}
            videoId={videoId}
            commentId={id}
          />
        </div>
        <p className="comments__user-comment">{userComment}</p>
      </div>
    </div>
  );
}
