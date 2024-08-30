import React from "react";
import Header from "../components/header/Header";
import HomePublicacionesTitle from "../components/publicaciones/HomePublicacionesTitle";
import ArticleSection from "../components/publicaciones/ArticleSection";
import Footer from "../components/footer/Footer";

const Publicaciones = () => {
  return (
    <div>
      <Header />
      <div className="articlePageContainer">
        <HomePublicacionesTitle />
        <div className="articlePageContainerItems">
          <ArticleSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publicaciones;
