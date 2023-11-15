import { useEffect } from "react";

import coffee_info from "../../assets/coffee_info.jpeg";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Support = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="support" className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>Soporte</small>
          <h2>Planifica tu compra con confianza</h2>
          <p>
            Descubre cómo nuestra plataforma te ayuda a planificar tus compras
            de café con total seguridad. Nos encargamos de todo, desde la
            selección del café hasta el envío directo a tu casa.
          </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleInfo"
            >
              <span className="number">01</span>
              <h4>Requisitos de compra para nuestro café</h4>
              <p>
                Encuentra ayuda para planificar tus compras y ver qué esperar a
                la hora de adquirir tu café favorito de nuestra tienda. Te
                proporcionamos información detallada sobre cada tipo de café que
                ofrecemos, desde el origen hasta el proceso de elaboración.
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="3500"
              className="singleInfo"
            >
              <span className="number colorOne">02</span>
              <h4>Servicios de entrega en tu llegada</h4>
              <p>
                No quieres perder tiempo esperando en la puerta de tu casa por
                tu compra de café? Nosotros te ofrecemos servicios de entrega en
                tu llegada. Solo tienes que indicar tu dirección y nos
                encargamos del resto.
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="4500"
              className="singleInfo"
            >
              <span className="number colorTwo">03</span>
              <h4>Seguro de viaje múltiple riesgo para tu café </h4>
              <p>
                Protege tu inversión con nuestro seguro de viaje múltiple
                riesgo. En caso de que algo salga mal con tu compra de café,
                estás cubierto.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="imgDiv">
            <img src={coffee_info} alt="photo coffee" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
