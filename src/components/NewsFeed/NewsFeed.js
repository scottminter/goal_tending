import React from "react";
import Articles from "./Articles/Articles";

const NewsFeed = props => {
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  return (
    <div>
      <h2>News</h2>
      <Articles corsProxy={CORS_PROXY} />
    </div>
  );
};

export default NewsFeed;
