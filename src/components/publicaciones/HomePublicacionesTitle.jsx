import React from "react";

import "../../styles/publicacion/homepublicacion.css";
import { Link } from "react-router-dom";

const HomePublicacionesTitle = () => {
  return (
    <section>
      <h3 className="publicacionesTitle">Publicaciones Recientes</h3>
      <div className="publicacionesNavigation">
        <ul className="publicacionesNavList">
          {/* <li>Todo</li>
          <li>Plagas</li>
          <li>Entomologia</li>
          <li>Cultivo</li>
          <li>Riego</li>
          <li>Opiniones</li> */}
        </ul>
      </div>
    </section>
  );
};

export default HomePublicacionesTitle;
