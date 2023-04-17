const ArticleCard = ({ articles, setArticles }) => {
  return (
    <ul className="article-card">
      {articles.map((article) => {
        return (
          <li key={article.article_id}>
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
              <span className="article-category-titles">Votes:</span>{" "}
              {article.votes}
            </p>
            <p>
              <span className="article-category-titles">Comment count:</span>{" "}
              {article.comment_count}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleCard;
