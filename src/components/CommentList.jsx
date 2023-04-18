import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../Api";
import CommentCard from "./CommentCard";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsById(article_id).then((data) => {
      setComments(data);
    });
  }, [article_id]);

  return <CommentCard comments={comments} />;
};

export default CommentList;
