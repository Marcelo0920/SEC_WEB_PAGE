import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";

import "../styles/nosotros/nosotros.css";
import "leaflet/dist/leaflet.css";

const Nosotros = () => {
  return (
    <div>
      <Header />
      <section className="nosotrosSection">
        <div className="nosotrosContainer">
          <h1>Sobre Nosotros</h1>
          <p>
            La Sociedad Entomológica Cruceña (SEC) se dedica activamente a la
            investigación y promoción del conocimiento sobre los artrópodos, con
            un enfoque destacado en la fauna entomológica del departamento de
            Santa Cruz y de Bolivia en su conjunto. Funciona como un importante
            puente entre la sociedad civil y la comunidad científica,
            facilitando un intercambio vital de ideas a nivel nacional e
            internacional para enriquecer el entendimiento y manejo de estos
            organismos cruciales. Con un claro compromiso con la conservación de
            la biodiversidad, la promoción de prácticas agrícolas y pecuarias
            sostenibles, la protección de la salud pública y la formación
            avanzada de recursos humanos, la SEC busca representar y defender
            los intereses de sus miembros, quienes están involucrados en el
            estudio y aplicación de la entomología en diversas áreas de la vida
            nacional. Así, la SEC se posiciona como una institución clave en el
            desarrollo científico, enfocándose en abordar las necesidades
            regionales en temas agroambientales y de salud pública en el
            contexto boliviano.
          </p>
        </div>
        <div className="nosotrosContainer">
          <h1>Misión y Visión</h1>
          <p>
            Misión, Contribuir en la generación, difusión promoción, manejo y
            conocimiento de Artrópodos y en especial de la fauna entomológica
            del departamento de Santa Cruz y el país, organizando espacios de
            intercambio de la sociedad civil y el ámbito científico y académico
            entre especialistas nacionales e internacionales en beneficio de la
            sociedad boliviana.<br></br>
            <br></br> Visión, La SEC, es una institución científica líder en
            investigaciones de artrópodos con énfasis entomológica que coadyuva
            en políticas de conservación de la biodiversidad, la producción
            agropecuaria sostenible, la salud pública y la formación de recursos
            humanos.
          </p>
        </div>
        <div className="nosotrosContainer">
          <h1>Objetivo</h1>
          <p>
            La SEC tiene como objetivo agrupar, representar y defender los
            intereses de sus miembros, inmersos y relacionados con la
            investigación en artrópodos y la entomología en particular,
            promoviendo y contribuyendo al desarrollo científico de sus
            miembros, a fin de responder a las necesidades regionales en temas
            agroambientales, salud publica departamental y en el territorio
            nacional.
          </p>
        </div>
        <div className="nosotrosContainer">
          <h1>Donde Encontrarnos</h1>
          <div className="nosotrosMap">
            <MapContainer
              center={[-17.783717, -63.182634]}
              zoom={14}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[-17.783717, -63.182634]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Nosotros;
