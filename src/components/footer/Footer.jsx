import React from "react";

import "../../styles/footer/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerItems">
        <div className="footerTitle">
          <h4>Contacta con el Programador</h4>
          <p>marcelo0920.z@gmail.com</p>
          <p>+591 74613450</p>
        </div>
        <div className="footerTitle">
          <h4>Explora</h4>

          <p>
            <Link to="/nosotros"> Sobre Nosotros</Link>
          </p>
          <p>
            <Link to="/miembros"> Miembros</Link>
          </p>
          <p>
            <Link to="/publicaciones">Articulos</Link>
          </p>
          <p>
            <Link to="/contacto">Contactanos</Link>
          </p>
        </div>
        <div className="footerTitle">
          <h4>SEC</h4>
          <p>129 Calle Bolivar</p>
          <p>Santa Cruz de la Sierra, Bolivia</p>
          <p>+591 7845135</p>
        </div>
        <div className="footerTitle">
          {/* <h4>Redes Sociales</h4> */}
          {/*  <p>marcelo0920.z@gmail.com</p>
          <p>+591 74613450</p> */}
        </div>
      </div>
      <div className="subFooter">
        <p>2023 | SEC Web Blog</p>
        <p>Derechos Reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
