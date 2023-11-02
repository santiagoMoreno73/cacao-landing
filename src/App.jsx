import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import Support from "./Components/Support/Support";
import Travelers from "./Components/Travelers/Travelers";
import Subscribers from "./Components/Subscribers/Subscribers";
import Info from "./Components/Info/Info";
import Lounge from "./Components/Lounge/Lounge";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </div>
  );
};

export default App;
