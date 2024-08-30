import React, { useEffect } from "react";

import Header from "../components/header/Header";
import HomePublicacionesTitle from "../components/publicaciones/HomePublicacionesTitle";
import ArticleSection from "../components/publicaciones/ArticleSection";
import Hero from "../components/publicaciones/hero";
import Comunicados from "../components/publicaciones/Comunicados";
import Footer from "../components/footer/Footer";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { setDefaultSession } from "../actions/auth";
import { setDefaultArticle } from "../actions/articulos";

import "../styles/publicacion/publicaciones.css";

const Home = ({
  loginSuccess,
  setDefaultSession,
  publishSucceed,
  setDefaultArticle,
}) => {
  useEffect(() => {
    if (loginSuccess == true) {
      toast.success("Sesión iniciada con éxito!", { theme: "light" });
      setDefaultSession();
    }

    if (publishSucceed == true) {
      toast.success("Articulo publicado con éxito!", { theme: "light" });

      setDefaultArticle();
    }
  }, [loginSuccess, publishSucceed]);

  return (
    <div>
      <ToastContainer />
      <Header />
      <div className="homeDelimitation">
        <HomePublicacionesTitle />
        <div className="publicaciones-align-center">
          <ArticleSection maxArticles={8} />
        </div>
      </div>
      <Hero />
      <div style={{ margin: "10vh 5vw 20vh 5vw" }}>
        <Comunicados />
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginSuccess: state.auth.loginSuccess,
  publishSucceed: state.articulo.publishSucceed,
});

Home.propTypes = {
  setDefaultSession: PropTypes.func.isRequired,
  setDefaultArticle: PropTypes.func.isRequired,
  loginSuccess: PropTypes.bool,
  publishSucceed: PropTypes.bool,
};

export default connect(mapStateToProps, {
  setDefaultSession,
  setDefaultArticle,
})(Home);
