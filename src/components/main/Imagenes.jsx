import React from "react";
import { VariablesContext } from "../../context/VariablesProvider";

const Imagenes = () => {
  const { variables } = React.useContext(VariablesContext);

  return (
    <>
      <section id="portfolio">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-12">
                <h3 className="section-title">{variables.tituloImagenes}</h3>
                <div className="section-title-divider"></div>
              </div>
            </div>
          </div>

          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item zoom d-flex justify-content-center">
              <img
                src={variables.portfolioImg1}
                className="img-fluid"
                alt={variables.venueName}
              />
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item zoom d-flex justify-content-center">
              <img
                src={variables.portfolioImg2}
                className="img-fluid"
                alt={variables.venueName}
              />
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item zoom d-flex justify-content-center">
              <img
                src={variables.portfolioImg3}
                className="img-fluid"
                alt={variables.venueName}
              />
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item zoom d-flex justify-content-center">
              <img
                src={variables.portfolioImg4}
                className="img-fluid"
                alt={variables.venueName}
              />
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item zoom d-flex justify-content-center">
              <img
                src={variables.portfolioImg5}
                className="img-fluid"
                alt={variables.venueName}
              />
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item zoom d-flex justify-content-center">
              <img
                src={variables.portfolioImg6}
                className="img-fluid"
                alt={variables.venueName}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Imagenes;
