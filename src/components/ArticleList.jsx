import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../Api";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles, setArticles, sortBy, order }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  console.log(topic, sortBy, order, "data");
  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sortBy, order)
      .then((data) => {
        setArticles(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic, sortBy, order, setArticles]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ArticleCard articles={articles ? articles : []} />
      )}
    </>
  );
};

export default ArticleList;
