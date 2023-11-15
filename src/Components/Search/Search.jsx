import { useEffect } from "react";
import PropTypes from "prop-types";

// icons
import { BiSolidCoffeeBean } from "react-icons/bi";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Search = ({ onChangeSearch }) => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="search container section">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="searchInputs flex"
        >
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <BiSolidCoffeeBean className="icon" />
            </div>
            <div className="texts">
              <h4>Café</h4>
              <input
                id="coffe"
                name="coffe"
                type="text"
                onChange={onChangeSearch}
                placeholder="Buscar"
              />
            </div>
          </div>

          <button className="btn btnBlock flex">Buscar</button>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  onChangeSearch: PropTypes.func,
};

export default Search;
