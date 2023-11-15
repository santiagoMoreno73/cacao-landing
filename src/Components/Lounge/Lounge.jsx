import { useEffect } from "react";

import coffee_home from "../../assets/coffee_home.jpeg";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Lounge = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="lounge" className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos="fade-down" data-aos-duration="2500" className="imgDiv">
          <img src={coffee_home} alt="photo coffee" />
        </div>

        <div className="textDiv">
          <h2 data-aos="fade-down" data-aos-duration="2500">
            Mucho cacao
          </h2>

          <div className="grids grid">
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Aromas del Campo en Tu Hogar</span>
              <p>
                Llegar a los hogares del pais con lo mejores aromas del campo
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Sabor y Sostenibilidad</span>
              <p>
                Reconocemos el trabajo de nuestros campesinos, brindando mejores
                oportunidades laborales
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Cosecha con Propósito</span>
              <p>Transformamos granos en experiencias únicas</p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Santander en Cada Taza</span>
              <p>Cultivando tradiciones, celebrando calidad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
