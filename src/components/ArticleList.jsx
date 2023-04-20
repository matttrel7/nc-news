import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../Api";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles, setArticles }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getArticles(topic)
      .then((data) => {
        setArticles(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic]);

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
