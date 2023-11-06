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
          <div className="row justify-content-evenly">
            <Evento
              title="MENDOZA"
              date="SAB 25 NOV 2023"
              image="https://www.tuentrada.com/images/65415fc4762b7.webp"
              buy="https://www.tuentrada.com/eventos/detalle/YSY-A-MENDOZA/637423034816"
            />
              <Evento
               title="ROSARIO"
               date="MIE 6 DIC 2023"
               image="https://www.tuentrada.com/images/65454ff900e06.webp"
               buy="https://www.tuentrada.com/eventos/detalle/YSY-A/574837893014"
             />
            <Evento
              title="BUENOS AIRES"
              date="DOM 17 DIC 2023"
              image="https://www.tuentrada.com/images/6529a9ee67b71.webp"
              buy="https://www.tuentrada.com/eventos/detalle/YSY-A/200044660278"
            />
           
          </div>
        </div>
      </section>
    </main>
  );
};

export default Eventos;
