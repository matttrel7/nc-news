import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../Api";

const CreateComment = ({ onCommentSubmit, comments }) => {
  const [comment, setComment] = useState({
    body: "",
    author: "",
  });
  const [isPosted, setIsPosted] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const { article_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingComment = comments.find(
      (c) => c.author === comment.author && c.body === comment.body
    );

    if (existingComment) {
      setIsDuplicate(true);
      return;
    }

    const finalComment = { ...comment };

    postComment(article_id, finalComment)
      .then((data) => {
        const newComment = { ...finalComment };
        setIsPosted(true);
        onCommentSubmit(newComment);
        setComment({ body: "", author: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Insert comment:</label>
      <input
        type="text"
        name="body"
        value={comment.body}
        onChange={handleChange}
        required
      />
      <label>Username:</label>
      <input
        type="text"
        name="author"
        value={comment.author}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={isPosted}>
        {isPosted ? "Comment posted" : "Post Comment"}
      </button>
      {isPosted && <p>Successfully added!</p>}
      {isDuplicate && <p>This comment has already been posted.</p>}
    </form>
  );
};

export default CreateComment;

//post to BE needs body, article_id & author details in order to post
