import React from "react";

import "./articleskeleton.css";

const ArticleSkeleton = () => {
  return (
    <div class="card">
      <div class="card__skeleton card__title"></div>
      <div class="card__skeleton card__description"> </div>
    </div>
  );
};

export default ArticleSkeleton;
