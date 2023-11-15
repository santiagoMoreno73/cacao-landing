import Navbar from "./Components/Navbar/Navbar";
import CheckoutPage from "./pages/CheckoutPage";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/homePage";
import Footer from "./Components/Footer/Footer";
import Subscribers from "./Components/Subscribers/Subscribers";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
      <Subscribers />
      <Footer />
    </Provider>
  );
};

export default App;
