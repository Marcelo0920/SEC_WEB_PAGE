import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addArticulo, getArticulo, startArticulo } from "../actions/articulos";
import { getCategories } from "../actions/categories";

import { MdCloudUpload } from "react-icons/md";
import { FaFileImage } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { HiMiniInformationCircle } from "react-icons/hi2";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import { setDefaultArticle } from "../actions/articulos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/publicacion/crearPublicacion.css";
import ButtonLoader from "../components/loaders/ButtonLoader";

const CrearPublicacion = ({
  addArticulo,
  startArticulo,
  loading,
  isAuthenticated,
  getCategories,
  categories: { categories },
  setDefaultArticle,
  publishError,
  publishSucceed,
}) => {
  const [images, setImages] = useState([]);
  const [fotos, setFotos] = useState([]);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    titulo: "",
    temas: "",
    contenido: "",
    fotos: [],
  });

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  useEffect(() => {
    if (publishError == true) {
      toast.error("Hubo un error al intentar publicar!", { theme: "light" });
      setDefaultArticle();
    }

    if (publishSucceed == true) {
      navigate("/");
    }
  }, [publishError, publishSucceed]);

  //console.log(categories);

  useEffect(() => {
    if (fotos.length == images.length && fotos.length != 0) {
      formData.fotos = fotos;
      addArticulo(formData);
    }
  }, [fotos]);

  function onFileSelect(event) {
    const files = event.target.files;

    if (files.length === 0) {
      return;
    }
    setImages((prevImages) => {
      // Utilizamos prevImages para obtener el estado más reciente
      const updatedImages = [...prevImages]; // Creamos una copia del estado anterior
      for (let index = 0; index < files.length; index++) {
        updatedImages.push(files[index]); // Añadimos el archivo al array de imágenes
      }
      return updatedImages; // Devolvemos el nuevo estado actualizado
    });
  }

  function removeFile(index) {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);

      return updatedImages;
    });
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    startArticulo();

    images.map((img) => {
      let data = new FormData();
      data.append("file", img);
      data.append("upload_preset", "sociedad_entomologica_crucena");
      data.append("folder", "SEC");
      data.append("cloud_name", "dvqsabodr");

      fetch("	https://api.cloudinary.com/v1_1/dvqsabodr/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setFotos((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages.push(data.url);
            return updatedImages;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div>
      <Header />
      <form className="crearPublicacion" onSubmit={(e) => handleSubmit(e)}>
        <h1>Crea tu Publicacion</h1>
        <div className="display-flex message">
          <HiMiniInformationCircle />
          <p>
            Sólo hay un bien: el conocimiento. Sólo hay un mal: la ignorancia. -
            Socrates
          </p>
        </div>
        <div className="crearPublicacionTitles">
          <div className="crearPublicacionInput">
            <p>
              <span>*</span> Titulo
            </p>
            <input
              value={formData.titulo}
              name="titulo"
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>
          <div className="crearPublicacionInput">
            <p>
              <span>*</span> Tema
            </p>
            <select
              name="temas"
              value={formData.temas}
              onChange={(e) => {
                onChange(e);
              }}
            >
              {categories.map((categoria) => {
                return (
                  <option
                    value={categoria?._id}
                    key={categoria?._id}
                    onChange={(e) => onChange(e)}
                  >
                    {categoria.category || ""}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div>
          <div className="descripcionPublicacion">
            <p>
              <span>*</span> Descripcion
            </p>
            <textarea
              value={formData.contenido}
              rows={8}
              name="contenido"
              placeholder="Escribe aca el contenido de tu Post"
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>
          <label className="label-input">
            <div className="uploadFile">
              <MdCloudUpload />
              <p>Explora archivos para subir</p>
              <input
                name="file"
                type="file"
                className="file"
                onChange={onFileSelect}
                multiple
              ></input>
            </div>
          </label>

          <div className="fileComponent">
            {images.map((img, index) => {
              return (
                <div className="fileUploaded" key={index}>
                  <FaFileImage />
                  <div className="fileUploadedIcons">
                    <p>
                      {img.name} #{index + 1} -
                    </p>
                    <MdDelete onClick={() => removeFile(index)} />
                  </div>
                </div>
              );
            })}
          </div>

          <button type="submit" className="publicarButton">
            {loading ? <ButtonLoader /> : "Publicar"}
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

CrearPublicacion.propTypes = {
  addArticulo: PropTypes.func.isRequired,
  startArticulo: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  setDefaultArticle: PropTypes.func.isRequired,
  publishError: PropTypes.bool,
  publishSucceed: PropTypes.bool,
  loading: PropTypes.bool,
  categories: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.articulo.loading,
  publishSucceed: state.articulo.publishSucceed,
  publishError: state.articulo.publishError,
  categories: state.categories,
});

export default connect(mapStateToProps, {
  addArticulo,
  startArticulo,
  getCategories,
  setDefaultArticle,
})(CrearPublicacion);
