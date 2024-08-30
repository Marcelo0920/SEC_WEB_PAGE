import React from "react";
import ComunicadoCard from "./ComunicadoCard";

import "../../styles/publicacion/comunicados.css";

const Comunicados = () => {
  return (
    <section>
      <h2 className="comunicadoTitle">Comunicados de la SEC</h2>
      <div className="comunicadoList">
        <ComunicadoCard />
        <ComunicadoCard />
        <ComunicadoCard />
      </div>
    </section>
  );
};

export default Comunicados;
