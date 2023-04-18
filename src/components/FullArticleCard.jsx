import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../Api";

const FullArticleCard = ({ article, setArticles }) => {
  const { article_id } = useParams();
  //   const article = articles.find((a) => a.id === article_id);
  useEffect(() => {
    getArticlesById(article_id).then((data) => {
      setArticles(data);
    });
  }, [article_id, setArticles]);

  return (
    <section className="article-card">
      <h3>{article.title}</h3>
      <img src={article.article_img_url} alt={article.title}></img>
      <p>
        <span className="article-category-titles">Author:</span>{" "}
        {article.author}
      </p>
      <p>
        <span className="article-category-titles">Topic:</span> {article.topic}
      </p>
      <p>
        <span className="article-category-titles">Body:</span> {article.body}
      </p>
      <p>
        <span className="article-category-titles">Votes:</span> {article.votes}
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
  );
};

export default FullArticleCard;
