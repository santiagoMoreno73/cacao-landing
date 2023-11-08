import { useState } from "react";

import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { BiSolidCoffeeBean } from "react-icons/bi";

import Modal from "../Modal/Modal";
import Login from "../Login/Login";

const Navbar = () => {
  // let us remove the navBar in the small width screens
  const [active, setActive] = useState("navBarMenu");
  // let us add a background color to the second Navbar
  const [noBg, addBg] = useState("navBarTwo");
  // open modal
  const [openModal, setOpenModal] = useState(false);

  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };

  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_with_bg");
    } else {
      addBg("navBarTwo");
    }
  };

  window.addEventListener("scroll", addBgColor);

  const handleChangeModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" /> Languages
          </li>
        </div>

        <div className="atb flex">
          <span onClick={handleChangeModal}>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className={noBg}>
        <div className="logoDiv">
          {/* <img src="" alt="logo" className="Logo" /> */}
          <BiSolidCoffeeBean />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li className="listItem" onClick={removeNavBar}>
              Home
            </li>
            <li className="listItem" onClick={removeNavBar}>
              About
            </li>
            <li className="listItem" onClick={removeNavBar}>
              Offers
            </li>
            <li className="listItem" onClick={removeNavBar}>
              Seats
            </li>
            <li className="listItem" onClick={removeNavBar}>
              Destinations
            </li>
          </ul>

          <button className="btn flex btnOne" onClick={removeNavBar}>
            Contact
          </button>
        </div>

        <button className="btn flex btnTwo">Contact</button>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>

      <Modal open={openModal} onClose={setOpenModal} title={"Login"}>
        <Login />
      </Modal>
    </div>
  );
};

export default Navbar;
