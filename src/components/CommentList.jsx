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
    setComments([newComment, ...comments]);
  };

  return (
    <>
      <CreateComment onCommentSubmit={addComment} comments={comments} />
      <CommentCard comments={comments} />
    </>
  );
};

export default CommentList;
