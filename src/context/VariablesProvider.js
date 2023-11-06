import React from "react";
import portfolio1 from "../img/a.webp";
import portfolio2 from "../img/b.webp";
import portfolio3 from "../img/c.webp";
import portfolio4 from "../img/d.webp";
import portfolio5 from "../img/e.webp";
import portfolio6 from "../img/f.webp";

import logo from "../img/logo.png";

import historia from "../img/690x460.webp";


export const VariablesContext = React.createContext();

const VariablesProvider = (props) => {
  const variablesGlobales = {
    iframeUbicacion: "",
    tituloUbicacion: "Ubicación",
    direccion: "",
    mailTo: "",
    mail: "",
    iframeAlt: "",
    logo: logo,
    altLogo: "logo tuentrada",
    venueName: "YSY A",
    tuentradaName: "tuentrada.com",
    linkTuentrada: "https://tuentrada.com",
    linkVenueFb: "https://www.facebook.com/ysyashakur/",
    linkVenueTw: "https://twitter.com/ysy__a",
    linkVenueIg: "https://www.instagram.com/ysy__a/",
    volver: "Volver",
    tituloEventos: "PRÓXIMOS SHOWS",
    tituloImagenes: "Galería",
    portfolioImg1:"https://tuentrada.com/gira/ysy-a/img/1.png",
    portfolioImg2: "https://tuentrada.com/gira/ysy-a/img/2.png",
    portfolioImg3: "https://tuentrada.com/gira/ysy-a/img/3.png",
    portfolioImg4: "https://tuentrada.com/gira/ysy-a/img/4.png",
    portfolioImg5: "https://tuentrada.com/gira/ysy-a/img/5.png",
    portfolioImg6: "https://tuentrada.com/gira/ysy-a/img/6.png",
    elementoNavbar1: "Shows",
    elementoNavbar2: "Descripción",
    elementoNavbar3: "Galería",
    elementoNavbar4: "Ubicacion",
    tituloInicio: "",
    botonInicio: "SHOWS",
    tituloHistoriaArriba: "YSY A",
    tituloHistoriaAbajo: "",
    imagenHistoria: "https://tuentrada.com/gira/ysy-a/img/descripcion.webp",
    descripcion1:
      "YSY A, cuyo nombre real es Alejo Nahuel Acosta, es un versátil rapero y músico argentino. Se hizo conocido como organizador de la competición de rap “El Quinto Escalón“ en 2013. En 2017, decidió lanzar su carrera musical.",
    descripcion2:
      "Lanzó varios álbumes exitosos, incluyendo “Antezana 247“ en 2018, “Hecho a Mano“ en 2019, “Trap de Verdad“ en 2021 y “YSYSMO“ en 2022. Su música ha influido en la escena del trap argentino y es ampliamente reconocido en América Latina.",
  };

  const [variables, setVariables] = React.useState(variablesGlobales);

  return (
    <VariablesContext.Provider value={{ variables, setVariables }}>
      {props.children}
    </VariablesContext.Provider>
  );
};

export default VariablesProvider;
