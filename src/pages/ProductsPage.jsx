import { useEffect, useState } from "react";
// component
import Search from "../Components/Search/Search";

// icons
import { AiOutlineShoppingCart } from "react-icons/ai";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

// services
import { getAllProducts } from "../services/products/products";

// redux
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    getAllProducts().then(({ data }) => {
      if (data && data.status === 200 && data.body) {
        setProducts(data.body);
        setSearch(data.body);
      }
    });
  }, []);

  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;

    const results = search.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    setProducts(results);
  };

  const addToCar = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="products container section">
      <div className="sectionContainer">
        <div data-aos="fade-up" data-aos-duration="2500" className="titleDiv">
          <h1>Productos</h1>
        </div>
        <Search onChangeSearch={handleChange} />
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="productsContainer grid"
        >
          {products.length > 0 &&
            products.map((item, index) => {
              return (
                <div key={index} className="productCard">
                  <img src={item.image} className="img"></img>
                  <p>
                    <b>{item.name}</b>
                  </p>
                  <p>
                    <b>$ {item.price}</b>
                  </p>
                  <p>{item.description}</p>
                  <button
                    onClick={() => addToCar(item)}
                    className="productCardButton btn"
                  >
                    <AiOutlineShoppingCart className="icon" />
                    <span>Añadir al carrito</span>
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
