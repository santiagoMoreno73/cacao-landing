import { useEffect } from "react";

// import assets
import video from "../../assets/video.mp4";
import icon_cacao from "../../assets/icon_cacao.png";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">
          Crea recuerdos eternos con nosotros
        </h1>
      </div>

      <div
        data-aos="fade-down"
        data-aos-duration="2500"
        className="homeImages flex"
      >
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>

        <img src={icon_cacao} alt="icon cacao" className="plane" />
      </div>
    </div>
  );
};

export default Home;
