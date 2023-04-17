import "./App.css";
import ArticleList from "./components/ArticleList";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import React, { useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ArticleList articles={articles} setArticles={setArticles} />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;