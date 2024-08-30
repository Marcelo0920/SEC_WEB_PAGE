import React, { useEffect } from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../../styles/publicacion/article.css";

console.log("fuera de la funcion");

const Article = ({
  articulo: { _id, titulo, contenido, temas, autor_name, fotos, fecha },
}) => {
  let formattedDate = format(fecha, "dd.MM.yyyy");

  let limitedContent;
  const words = contenido?.split(" ");

  if (words?.length > 35) {
    limitedContent = words?.slice(0, 35).join(" ") + ".....";
  } else if (contenido?.length > 100) {
    limitedContent = contenido?.slice(0, 100) + ".....";
  } else {
    limitedContent = contenido;
  }

  return (
    <article className="articleContainer">
      <img src={fotos[0]} />
      <p className="articleDate">{formattedDate}</p>
      <h4 className="articleTitle">{titulo}</h4>
      <p className="articleText">{limitedContent}</p>
    </article>
  );
};

Article.propTypes = {
  articulo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Article);
