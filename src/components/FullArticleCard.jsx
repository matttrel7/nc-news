import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById, patchArticleVotes } from "../Api";
import CommentList from "./CommentList";

const FullArticleCard = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [err, setErr] = useState("");
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    getArticlesById(article_id).then((data) => {
      setArticle(data);
    });
  }, [article_id, setArticle]);

  const handleVote = (increment) => {
    setArticle((prevArticle) => ({
      ...prevArticle,
      votes: prevArticle.votes + increment,
    }));
    patchArticleVotes({ inc_votes: increment }, article_id).catch(() => {
      setArticle(
        (prevArticle) => ({
          ...prevArticle,
          votes: prevArticle.votes - increment,
        }),
        setErr("Something went wrong, try again later!")
      );
    });
    setHasVoted(true);
  };

  return (
    <>
      <section className="article-card">
        <h3>{article.title}</h3>
        <img src={article.article_img_url} alt={article.title}></img>
        <p>
          <span className="article-category-titles">Author:</span>{" "}
          {article.author}
        </p>
        <p>
          <span className="article-category-titles">Topic:</span>{" "}
          {article.topic}
        </p>
        <p>
          <span className="article-category-titles">Body:</span> {article.body}
        </p>
        <p>
          <span className="article-category-titles">Votes: </span>
          <button onClick={() => handleVote(-1)} disabled={hasVoted}>
            -
          </button>
          {article.votes}
          <button onClick={() => handleVote(1)} disabled={hasVoted}>
            +
          </button>
          {err ? <p>{err}</p> : null}
        </p>
        <p>
          <span className="article-category-titles">Comment count:</span>{" "}
          {article.comment_count}
        </p>
        <p>
          <span className="article-category-titles">Created at:</span>{" "}
          {article.created_at}
        </p>
      </section>
      <CommentList />
    </>
  );
};

export default FullArticleCard;
