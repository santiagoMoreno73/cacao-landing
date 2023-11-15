import { useEffect } from "react";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Subscribers = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="subscribers" className="subscribe section">
      <div
        // data-aos="fade-up"
        // data-aos-duration="2500"
        className="sectionContainer container"
      >
        <h2>Suscríbete al boletín y recibe las últimas noticias</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder="Ingresa tu email" />
          <button className="btn">Suscribirse</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
