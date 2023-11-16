import { useEffect } from "react";

import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

// icon
import icon_cacao from "../../assets/icon_cacao.png";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

const socialNetworks = [
  {
    title: "Facebook",
    path: "https://www.facebook.com/profile.php?id=100071292084327&mibextid=ZbWKwL",
    icon: <TiSocialFacebook className="icon" />,
  },
  {
    title: "Instagram",
    path: "https://www.instagram.com/mucho_cacaoo/?igshid=MWs2aTlkOGtlc2ljbA%3D%3D",
    icon: <AiOutlineInstagram className="icon" />,
  },
  {
    title: "Youtube",
    path: "/",
    icon: <AiFillYoutube className="icon" />,
  },
  {
    title: "Pinterest",
    path: "/",
    icon: <FaPinterestP className="icon" />,
  },
];

const Footer = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={icon_cacao} alt="icon" className="Logo" />
            {/* <BiSolidCoffeeBean /> */}
          </div>
          <p>Tu mente debe ser más fuerte que tus sentimientos, ¡vuela!</p>
          <div className="socialIcon flex">
            {socialNetworks.map(({ path, icon }, index) => {
              return (
                <a key={index} href={path} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              );
            })}
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Información</span>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="#">Explora</a>
          </li>
          <li>
            <a href="#">Beneficios</a>
          </li>
          <li>
            <a href="#">Experiencias</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Guía rápida</span>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Experiencias</a>
          </li>
          <li>
            <a href="#">Condiciones</a>
          </li>
          <li>
            <a href="#">Servicio</a>
          </li>
          <li>
            <a href="#">Route Map</a>
          </li>
          <li>
            <a href="#">Comunidad</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Información</span>
          <li>
            <a href="#">Historia</a>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
          <li>
            <a href="#">Carreras</a>
          </li>
          <li>
            <a href="#">Transporte</a>
          </li>
          <li>
            <a href="#">Reglas</a>
          </li>
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>
          Courtesy Design | Developed by{" "}
          <a href="#" target="_blank">
            S_costa
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
