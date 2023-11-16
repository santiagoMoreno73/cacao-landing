import { useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, removeItem, removeAll } from "../redux/cartSlice";
// icons
import { IoMdAdd } from "react-icons/io";
import { IoRemove } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
// service
import { createSale } from "../services/sales/sales";
// components
import Modal from "../Components/Modal/Modal";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  // open modal
  const [openModal, setOpenModal] = useState(false);

  const handlePay = () => {
    const sales = [];

    if (!Object.keys(user).length) {
      toast.error(`Es necesario iniciar sesion para comprar`);
      return;
    }

    for (let item of cartItems) {
      const sale = {
        id_user: user.id,
        id_product: item.id,
        quantity: item.quantity,
        total: item.totalPrice,
      };

      sales.push(sale);
    }

    if (!sales.length) return;

    createSale(sales)
      .then(({ data }) => {
        if (data && data.status == 201) {
          dispatch(removeAll());
          setOpenModal(true);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  const decreaseQuantity = (id) => {
    dispatch(removeItem(id));
  };

  const increaseQuantity = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="checkout container section">
      <div className="sectionContainer">
        <div data-aos="fade-up" data-aos-duration="2500" className="titleDiv">
          <h1>Checkout</h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="checkoutContainer"
        >
          <table className="table">
            <thead className="tableHead">
              <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Descripción</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                      <img
                        src={item.image}
                        className="img"
                        alt="product image"
                      />
                    </td>
                    <td>{item.description}</td>
                    <td>
                      <div className="divQuantity">
                        <IoRemove
                          className="icon"
                          onClick={() => decreaseQuantity(item.id)}
                        />
                        {item.quantity}
                        <IoMdAdd
                          className="icon"
                          onClick={() => increaseQuantity(item)}
                        />
                        <MdDelete
                          className="icon"
                          onClick={() => handleDeleteItem(item.id)}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="divAmount">
            <h3>
              <b>Total a pagar:</b> $ {totalAmount}
            </h3>
            {!cartItems.length ? (
              <></>
            ) : (
              <>
                <button className="btn" onClick={handlePay}>
                  Pagar
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <Modal
        open={openModal}
        onClose={setOpenModal}
        title={"Compra en camino!"}
      >
        <div className="divSaleSuccess">Tu compra ha sido exitosa!</div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
