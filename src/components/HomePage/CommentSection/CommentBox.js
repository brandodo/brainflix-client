import React from "react";

export default function CommentBox({ comment, changeHandler }) {
  return (
    <>
      <textarea
        name="comment"
        className="comments__form-textbox"
        rows="4"
        placeholder="Add a new comment"
        value={comment}
        onChange={changeHandler}
      ></textarea>
      <input
        name="comment"
        type="text"
        className="comments__form-textbox-tablet"
        placeholder="Add a new comment"
        value={comment}
        onChange={changeHandler}
      ></input>
    </>
  );
}
