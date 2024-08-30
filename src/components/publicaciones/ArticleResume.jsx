import React, { useEffect, useState } from "react";
import { format, isValid } from "date-fns";
import { es } from "date-fns/locale";

import { connect } from "react-redux";
import { getArticulo } from "../../actions/articulos";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import image from "../../assets/article.jpg";

import "../../styles/publicacion/article.css";

const ArticleResume = ({ getArticulo, match, articulo, loading }) => {
  let { id } = useParams();

  console.log(loading);

  useEffect(() => {
    getArticulo(id);
  }, [getArticulo, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  //console.log(articulo);

  let formattedDate = "";
  if (articulo?.fecha && isValid(new Date(articulo.fecha))) {
    formattedDate = format(new Date(articulo.fecha), "PP", { locale: es });
  }

  return (
    <div className="articleResume">
      <div className="articlePageContainer">
        <p className="articleRelaseDate">{formattedDate || ""}</p>
        <div className="articleContent">
          <h2 className="singleArticleTitle">{articulo?.titulo || ""}</h2>
          <p className="articleText">{articulo?.contenido || ""}</p>
          <div className="articleImages">
            {articulo?.fotos.map((foto, index) => {
              return <img src={foto} key={index} />;
            })}
          </div>
          <div className="articleTopics">
            {articulo?.temas.map((tema, index) => <p key={index}>{tema}</p>) ||
              ""}
          </div>
          <div className="articleAutor">
            <img src={image} />
            <div className="articleAutorText">
              <p>Por {articulo?.autor_name || ""}</p>
              <p>{articulo?.auto_cargo || ""}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articulo: state.articulo.articulo,
  loading: state.articulo.loading,
});

ArticleResume.propTypes = {
  getArticulo: PropTypes.func.isRequired,
  articulo: PropTypes.object,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, { getArticulo })(ArticleResume);
