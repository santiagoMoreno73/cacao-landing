import { useEffect } from "react";

import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck, BsBookmarkCheck } from "react-icons/bs";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Info = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="info" className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2 data-aos="fade-right" data-aos-duration="2500">
            Productos mucho cacao
          </h2>

          <button data-aos="fade-up" data-aos-duration="2500" className="btn">
            Ver todo
          </button>
        </div>

        <div className="cardsDiv grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleCard grid"
          >
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>

            <span className="cardTitle">Procesamos</span>
            <p>Procesamos el cacao de forma artesanal</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3500"
            className="singleCard grid"
          >
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className="icon" />
            </div>

            <span className="cardTitle">Natural</span>
            <p>Nuestros productos son 100% naturales</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="4500"
            className="singleCard grid"
          >
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className="icon" />
            </div>

            <span className="cardTitle">Calidad</span>
            <p>Incorporamos técnicas para traer el mejor café a tu hogar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
