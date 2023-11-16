import Home from "./../Components/Home/Home";
// import Search from "./../Components/Search/Search";
import Support from "./../Components/Support/Support";
import Travelers from "./../Components/Travelers/Travelers";
import Info from "./../Components/Info/Info";
import Lounge from "./../Components/Lounge/Lounge";

const HomePage = () => {
  return (
    <div>
      <Home />
      {/* <Search /> */}
      <Support />
      <Info />
      <Lounge />
      <Travelers />
    </div>
  );
};

export default HomePage;
