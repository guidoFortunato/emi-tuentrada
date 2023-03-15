import React from "react";
import { VariablesContext } from "../../context/VariablesProvider";
import { Evento } from "./Evento/";



const Eventos = (props) => {

  const { variables } = React.useContext(VariablesContext);


  return (
    <main id="main">
      <section id="team">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">{variables.tituloEventos}</h3>
              <div className="section-title-divider"></div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-12 text-center mt-2 mb-2">
              <div className="container-alerta alerta-danger" role="alert">
                <h4 className="text-center margin-0">
                  No hay shows disponibles en este momento
                </h4>
              </div>
            </div>

          </div> */}
          <div className="row">
            <Evento
              title="TANDIL"
              date="JUE 11 MAY 2023"
              image="https://www.tuentrada.com/images/640cf09731034.webp"
              buy="https://www.tuentrada.com/eventos/detalle/EMI/948148275090"
            />
              <Evento
               title="BAHÍA BLANCA"
               date="SAB 13 MAY 2023"
               image="https://www.tuentrada.com/images/6408f1bfe0f66.webp"
               buy="https://www.tuentrada.com/eventos/detalle/EMI/572188614030"
             />
            <Evento
              title="NEUQUEN"
              date="DOM 14 MAY 2023"
              image="https://www.tuentrada.com/images/640f3ca54a66c.webp"
              buy="https://www.tuentrada.com/eventos/detalle/EMI-NQN/699577660235"
            />
            <Evento
              title="MENDOZA"
              date="JUE 8 JUN 2023"
              image="https://www.tuentrada.com/images/63f6461e711e3.webp"
              buy="https://www.tuentrada.com/eventos/detalle/TeatroPlaza/737501936378"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Eventos;
