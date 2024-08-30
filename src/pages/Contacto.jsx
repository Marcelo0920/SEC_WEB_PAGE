import React, { useEffect, useState } from "react";
import {
  sendMail,
  startMailSending,
  setDefaultMailStatus,
} from "../actions/mail";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import "../styles/contacto/contacto.css";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import ButtonLoader from "../components/loaders/ButtonLoader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacto = ({
  sendMail,
  loading,
  mail,
  startMailSending,
  setDefaultMailStatus,
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    razon: "",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "razon") {
      const isChecked = e.target.checked;
      let updateRazon;
      if (isChecked) {
        updateRazon = [...formData.razon, value];
      } else {
        updateRazon = formData.razon.filter((item) => item !== value);
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    console.log(mail.mensaje);
    if (mail.mensaje == "Email enviado con exito") {
      toast.success("Mensaje enviado con exito!", { theme: "light" });
      console.log("Haberrrrrr");
      console.log(mail);
      setDefaultMailStatus();
    }
  }, [mail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    startMailSending();

    sendMail(formData);
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="contacto">
        <h1 className="contactoTitle">Contactanos</h1>
        <div className="contactoCard">
          <div className="contactoCardInformation">
            <div>
              <h3>Informacion de Contacto</h3>
              <p>Siempre en Contacto con Todos</p>
            </div>
            <div className="contactoCardIcons">
              <div className="contactoCardIcon">
                <PiPhoneCallFill />
                <p>+1012 3456 789</p>
              </div>
              <div className="contactoCardIcon">
                <MdEmail />
                <p>demo@gmail.com</p>
              </div>
              <div className="contactoCardIcon">
                <FaLocationDot />
                <p>
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </p>
              </div>
            </div>
            <div className="contactoSocialMedia">
              <div>
                <AiFillInstagram />
              </div>
              <div>
                <FaYoutube />
              </div>
              <div>
                <FaFacebook />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contactoInputForm">
            <div className="contactoInputWrap">
              <div className="contactoInput">
                <p>Nombre</p>
                <input
                  name="nombre"
                  type="text"
                  onChange={handleInputChange}
                  value={formData.nombre}
                />
              </div>
              <div className="contactoInput">
                <p>Apellido</p>
                <input
                  name="apellido"
                  type="text"
                  onChange={handleInputChange}
                  value={formData.apellido}
                />
              </div>
              <div className="contactoInput">
                <p>Email</p>
                <input
                  name="email"
                  type="email"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </div>
              <div className="contactoInput">
                <p>Numero de telefono</p>
                <input
                  name="telefono"
                  type="tel"
                  onChange={handleInputChange}
                  value={formData.telefono}
                />
              </div>
            </div>

            <h4>Por que te comunicas?</h4>
            <div className="contactoCheckBox">
              <div className="contactoCheckBoxItem">
                <input
                  name="razon"
                  type="checkbox"
                  value="Solicitud voluntario SEC"
                  onChange={handleInputChange}
                  checked={formData.razon.includes("Solicitud voluntario SEC")}
                />
                <label>Quiero unirme a la SEC</label>
              </div>
              <div className="contactoCheckBoxItem">
                <input
                  type="checkbox"
                  name="razon"
                  value="Solicitud trabajo SEC"
                  onChange={handleInputChange}
                  checked={formData.razon.includes("Solicitud trabajo SEC")}
                />
                <label>Quiero trabajar con ustedes</label>
              </div>
              <div className="contactoCheckBoxItem">
                <input
                  type="checkbox"
                  name="razon"
                  value="Solicitud pasantia SEC"
                  onChange={handleInputChange}
                  checked={formData.razon.includes("Solicitud pasantia SEC")}
                />
                <label>Quiero hacer pasantía</label>
              </div>
              <div className="contactoCheckBoxItem">
                <input
                  type="checkbox"
                  name="razon"
                  value="Opinión"
                  onChange={handleInputChange}
                  checked={formData.razon.includes("Opinión")}
                />
                <label>Quiero dar mi opinión</label>
              </div>
            </div>
            <div className="contactoInputMessage">
              <p>Mensaje</p>
              <input
                placeholder="Escribre tu Mensaje"
                type="text"
                name="mensaje"
                onChange={handleInputChange}
                value={formData.mensaje}
              />
            </div>
            <button type="submit" className="contactoButton">
              {loading ? <ButtonLoader /> : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

Contacto.propTypes = {
  sendMail: PropTypes.func.isRequired,
  setDefaultMailStatus: PropTypes.func.isRequired,
  startMailSending: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  mail: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.mail.loading,
  mail: state.mail.mail,
});

export default connect(mapStateToProps, {
  sendMail,
  setDefaultMailStatus,
  startMailSending,
})(Contacto);
