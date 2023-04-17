import { useEffect } from "react";
import { getArticles } from "../Api";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles, setArticles, selectedTopic }) => {
  useEffect(() => {
    getArticles(selectedTopic).then((data) => {
      const filteredArticles = data.filter(
        (article) => article.topic === selectedTopic
      );
      if (filteredArticles.length === 0) {
        setArticles(data);
      } else {
        setArticles(filteredArticles);
      }
    });
  }, [selectedTopic]);

  return <ArticleCard articles={articles} />;
};

export default ArticleList;
