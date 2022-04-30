import Comment from "./Comment";
import Divider from "../../Divider/Divider";

export default function CommentList({ videoId, comments, deleteComment }) {
  const commentsList = comments
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((comment) => {
      return (
        <>
          <Comment
            videoId={videoId}
            id={comment.id}
            key={comment.id}
            userName={comment.name}
            userComment={comment.comment}
            timestamp={comment.timestamp}
            deleteComment={deleteComment}
          />
          <Divider />
        </>
      );
    });

  return <div className="comments__user-comments">{commentsList}</div>;
}
