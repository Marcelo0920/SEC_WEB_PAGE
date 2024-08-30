import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ArticleResume from "../components/publicaciones/ArticleResume";
import PublicacionesRelacionadas from "../components/publicaciones/PublicacionesRelacionadas";

const Publicacion = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <div style={{ margin: "5% 10%" }}>
        <ArticleResume />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <PublicacionesRelacionadas />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publicacion;
