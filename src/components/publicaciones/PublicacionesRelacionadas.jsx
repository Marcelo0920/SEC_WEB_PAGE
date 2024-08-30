import React from "react";
import ArticleSection from "./ArticleSection";

const PublicacionesRelacionadas = () => {
  return (
    <div>
      <h3>Publicaciones Relacionadas</h3>
      <ArticleSection maxArticles={4} />
    </div>
  );
};

export default PublicacionesRelacionadas;
