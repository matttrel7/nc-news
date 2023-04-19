import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../Api";

const CreateComment = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState({
    body: "",
    author: "",
  });

  const [isPosted, setIsPosted] = useState(false);
  const { article_id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();

    const finalComment = { ...comment };

    postComment(article_id, finalComment)
      .then((data) => {
        setIsPosted(true);
        onCommentSubmit(data);
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
      <button type="submit">Post Comment</button>
      {isPosted && <p>Successfully added!</p>}
    </form>
  );
};

export default CreateComment;

//post to BE needs body, article_id & author details in order to post
