import PropTypes from "prop-types";
import { useEffect } from "react";
import { GrFormClose } from "react-icons/gr";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Modal = ({ children, title, open, onClose }) => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleChangeModal = () => {
    onClose(false);
  };

  return (
    <>
      {open && (
        <div className="overlay">
          <div className="modal" data-aos="fade-down" data-aos-duration="1000">
            <div className="sectionContainer">
              <div className="sectionHead">
                <h3>{title}</h3>
              </div>
              <div className="btnClose" onClick={handleChangeModal}>
                <GrFormClose className="icon"></GrFormClose>
              </div>
              <div className="sectionBody">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
