import { useState } from "react";
// icons
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
// icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
// components
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
// redux
import { useSelector } from "react-redux";

const optionsNav = [
  { title: "Inicio", path: "/" },
  { title: "Acerca de", path: "#support" },
  { title: "Info", path: "#info" },
  { title: "Lounge", path: "#lounge" },
  { title: "Suscríbete", path: "#subscribers" },
  { title: "Productos", path: "/products" },
];

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const { totalQuantity } = useSelector((state) => state.cart);
  // let us remove the navBar in the small width screens
  const [active, setActive] = useState("navBarMenu");
  // let us add a background color to the second Navbar
  const [noBg, addBg] = useState("navBarTwo");
  // open modal
  const [openModal, setOpenModal] = useState(false);

  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
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

  const handleCloseSession = () => {};

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" /> Soporte
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" /> Idiomas
          </li>
        </div>

        <div className="atb flex">
          <div className="divShopping">
            <a className="btn-shopping" href="/checkout">
              <AiOutlineShoppingCart className="icon" />
            </a>
            <div className="numItems">
              <b>{totalQuantity}</b>
            </div>
          </div>

          {!Object.entries(user).length ? (
            <span onClick={handleChangeModal}>Sign In</span>
          ) : (
            <>
              <div className="avatarContainer">
                <div className="avatarImg">
                  <RxAvatar />
                </div>
                {/* <p>{user.name}</p> */}
              </div>

              <span onClick={handleCloseSession}>
                <GoSignOut />
              </span>
            </>
          )}
        </div>
      </div>
      <div className={noBg}>
        <div className="logoDiv">
          {/* <img src="" alt="logo" className="Logo" /> */}
          <BiSolidCoffeeBean />
        </div>

        <div className={active}>
          <ul className="menu flex">
            {optionsNav.map((item, index) => {
              return (
                <li key={index}>
                  <a className="listItem" href={item.path}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>

          <button className="btn flex btnOne">Contact</button>
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
