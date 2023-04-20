import React from "react";
import { Link } from "react-router-dom";

const QueryBar = ({ topics }) => {
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
    </div>
  );
};

export default QueryBar;
