import Form from "./Form";
import CommentList from "./CommentList";
import Divider from "../../Divider/Divider";
import "./CommentsSection.scss";

export default function CommentsSection({
  videoId,
  comments,
  formHandler,
  deleteComment,
}) {
  if (!comments) {
    return null;
  }

  const numComments = comments.length;

  return (
    <section className="comments">
      <Form
        videoId={videoId}
        commentCount={numComments}
        formHandler={formHandler}
      />
      <Divider />
      <CommentList
        videoId={videoId}
        comments={comments}
        deleteComment={deleteComment}
      />
    </section>
  );
}
