import "./App.css";
import ArticleList from "./components/ArticleList";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import React, { useState } from "react";
import FullArticleCard from "./components/FullArticleCard";
import QueryBar from "./components/QueryBar";

function App() {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  return (
    <div className="App">
      <Header />
      <QueryBar
        topics={["coding", "cooking", "football"]}
        sort_by={["created_at", "comment_count", "votes"]}
        articles={articles}
        setArticles={setArticles}
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleList
              articles={articles}
              setArticles={setArticles}
              sortBy={sortBy}
              setSortBy={setSortBy}
              order={order}
              setOrder={setOrder}
            />
          }
        />
        <Route path="/articles/:article_id" element={<FullArticleCard />} />
        <Route
          path="/topic/:topic"
          element={
            <ArticleList articles={articles} setArticles={setArticles} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
