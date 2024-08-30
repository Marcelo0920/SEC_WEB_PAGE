import React from "react";
import Cookies from "js-cookie";

import { logout } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { IoLogIn } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { HiPencilAlt } from "react-icons/hi";
import { MdEditDocument } from "react-icons/md";
import { Link } from "react-router-dom";

const HeaderScroll = ({ logout }) => {
  return (
    <div>
      {Cookies.get("sec") ? (
        <div>
          <div className="header-item" onClick={logout}>
            <IoLogOut />
            <Link>Cerrar sesion</Link>
          </div>
          <div className="header-item">
            <HiPencilAlt />
            <Link to="/crearpublicacion">Escribir Articulo</Link>
          </div>

          <div className="header-item">
            <MdEditDocument />
            <Link to="/editarpublicacion">Escribir Comunicado</Link>
          </div>
        </div>
      ) : (
        <div className="header-item">
          <IoLogIn />
          <Link to="/login">Iniciar Sesion</Link>
        </div>
      )}
    </div>
  );
};

HeaderScroll.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  logout: state.articulo,
});

export default connect(mapStateToProps, { logout })(HeaderScroll);
