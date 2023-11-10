import { useEffect } from "react";

// icons
import { BiSolidCoffeeBean } from "react-icons/bi";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Search = () => {
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
              <h4>Coffee</h4>
              <input type="text" placeholder="coffee search" />
            </div>
          </div>

          <button className="btn btnBlock flex">Search Coffee</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
