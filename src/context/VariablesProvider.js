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
    venueName: "EMI",
    tuentradaName: "tuentrada.com",
    linkTuentrada: "https://tuentrada.com",
    linkVenueFb: "",
    linkVenueTw: "https://twitter.com/EGBrancciari",
    linkVenueIg: "https://www.instagram.com/egbrancciari77/",
    volver: "Volver",
    tituloEventos: "PRÓXIMOS SHOWS",
    tituloImagenes: "Imagenes",
    portfolioImg1: portfolio1,
    portfolioImg2: portfolio2,
    portfolioImg3: portfolio3,
    portfolioImg4: portfolio4,
    portfolioImg5: portfolio5,
    portfolioImg6: portfolio6,
    elementoNavbar1: "Shows",
    elementoNavbar2: "Descripción",
    elementoNavbar3: "Imagenes",
    elementoNavbar4: "Ubicacion",
    tituloInicio: "",
    botonInicio: "SHOWS",
    tituloHistoriaArriba: "EMI",
    tituloHistoriaAbajo: "",
    imagenHistoria: historia,
    descripcion1:
      "Emiliano Germán Brancciari Amarillo (Vicente López, 28 de octubre de 1977) es un músico y compositor argentino nacionalizado uruguayo, que hizo la mayoría de su carrera musical en ese país. Es uno de los líderes fundadores de la banda No Te Va Gustar.",
    descripcion2:
      "La última vez que Emiliano Brancciari pisó un escenario argentino fue el 18 de febrero, en Córdoba, cuando se presentó con No Te Va Gustar en el festival Cosquín Rock. A pocas semanas de ese show, con el que la banda uruguaya siguió defendiendo su disco Luz (2021), el músico regresa a esta orilla del Río de la Plata para ofrecer otro recital. Uno bastante especial, por su rareza y esencia. Y es que esta vez lo hará solo, sin sus compañeros de grupo.",
  };

  const [variables, setVariables] = React.useState(variablesGlobales);

  return (
    <VariablesContext.Provider value={{ variables, setVariables }}>
      {props.children}
    </VariablesContext.Provider>
  );
};

export default VariablesProvider;
