import React from "react";
import { Link } from "react-router-dom";
import Sort from "./Sort";

const QueryBar = ({ topics, articles, sortBy, setSortBy, order, setOrder }) => {
  return (
    <div>
      {topics.map((topic) => {
        return (
          <Link to={`/topic/${topic}`} key={topic}>
            <button label={topic} onClick={() => {}}>
              {topic}
            </button>
          </Link>
        );
      })}
      <Sort
        articles={articles}
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      />
    </div>
  );
};

export default QueryBar;
