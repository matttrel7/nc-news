import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../Api";
import CommentCard from "./CommentCard";
import CreateComment from "./CreateComment";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsById(article_id).then((data) => {
      setComments(data);
    });
  }, [article_id]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <>
      <CreateComment onCommentSubmit={addComment} article_id={article_id} />
      <CommentCard comments={comments} />
    </>
  );
};

export default CommentList;
