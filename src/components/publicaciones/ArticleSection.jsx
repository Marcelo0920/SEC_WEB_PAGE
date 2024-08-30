import React, { useEffect, useState } from "react";
import Article from "./Article";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getArticulos } from "../../actions/articulos";

import "../../styles/publicacion/articlesection.css";
import ArticleSkeleton from "../loaders/ArticleSkeleton";
import Pagination from "./Pagination";

const ArticleSection = ({
  getArticulos,
  articulo: { articulos, loading },
  maxArticles,
}) => {
  useEffect(() => {
    getArticulos();
  }, [getArticulos]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = articulos.slice(firstPostIndex, lastPostIndex);

  console.log("Pathname: " + window.location.pathname);

  if (!maxArticles) {
    maxArticles = articulos.length;
  }

  return loading ? (
    <section className="articleSection">
      <ArticleSkeleton />
      <ArticleSkeleton />
      <ArticleSkeleton />
      <ArticleSkeleton />
    </section>
  ) : (
    <div className="articlesPage">
      <section className="articleSection">
        {currentPosts.slice(0, maxArticles).map((articulo) => (
          <Link to={`/publicacion/${articulo._id}`} key={articulo._id}>
            <Article articulo={articulo} />
          </Link>
        ))}
      </section>

      {window.location.pathname == "/publicaciones" ? (
        <Pagination
          totalPosts={articulos.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

ArticleSection.propTypes = {
  getArticulos: PropTypes.func.isRequired,
  articulo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  articulo: state.articulo,
});

export default connect(mapStateToProps, { getArticulos })(ArticleSection);
