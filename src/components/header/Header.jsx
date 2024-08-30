import React, { useState } from "react";

import { FaRegUser } from "react-icons/fa6";

import logo from "../../assets/logo.png";

import "../../styles/header/header.css";
import { Link } from "react-router-dom";
import HeaderScroll from "./HeaderScroll";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>

      <div className="navigation">
        <div></div>
        <ul className="headerNav">
          <li>
            <Link to="/"> Inicio</Link>
          </li>
          <li>
            <Link to="/publicaciones"> Articulos</Link>
          </li>
          <li>
            <Link to="/nosotros">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/miembros">Miembros</Link>
          </li>
          <li>
            <Link to="/contacto">Contactanos</Link>
          </li>
        </ul>
        <div>
          <div
            className="user-icon"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="vertical"></div>
            <FaRegUser size={22} />
          </div>
          <div className={`drop-down-menu ${open ? "active" : "inactive"}`}>
            <HeaderScroll />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
