import React, { useContext, useState } from "react";
import CheckoutDetail from "../Checkout/CheckoutDetail";
import CartContext from "../../context/cartcontext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { db } from "../Firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import OrderConfirmationForm from "../OrderConfirmation/OrderConfirmation";
import ModalContext from "../../context/modalcontext";
import ScrollIntoView from "react-scroll-into-view";

const Checkout = () => {
  const { cartProducts, calculeTotalPrice } = useContext(CartContext);
  const total = calculeTotalPrice();
  const [ShowForm, setShowForm] = useState(false);
  const [OrderNumber, setOrderNumber] = useState();
  const { handleShowModal } = useContext(ModalContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [order, setOrder] = useState({
    buyer: formData,
    items: cartProducts.map((cartProduct) => {
      return {
        id: cartProduct.id,
        title: cartProduct.title,
        price: cartProduct.price,
      };
    }),
    total: total,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    let prevOrder = { ...order, buyer: formData };
    e.preventDefault();
    setOrder({ ...order, buyer: formData });
    pushOrder(prevOrder);
  };

  const pushOrder = async (prevOrder) => {
    const orderFirebase = collection(db, "ordenes");
    const orderDoc = await addDoc(orderFirebase, prevOrder);
    setOrderNumber(orderDoc.id);
  };

  return (
    <div className="Container">
      <ScrollIntoView />
      <CheckoutDetail></CheckoutDetail>
      <div className="CheckoutDetailTotal">
        <div className="CheckoutDetailTotalTitle">TOTAL</div>
        <div>${total}</div>
      </div>
      <div className="FinCompra">
        <ScrollIntoView selector="#footer">
          <button onClick={() => setShowForm(true)}>FINALIZAR COMPRA</button>
        </ScrollIntoView>
      </div>
      <div
        id="footer"
        className={ShowForm ? "OrderForm-Show" : "OrderForm-NoShow"}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Nombre y Apellido"
              onChange={handleChange}
              value={formData.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              value={formData.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              placeholder="Telefono"
              onChange={handleChange}
              value={formData.phone}
            />
          </Form.Group>
          <Button
            className="btn-primary-form"
            variant="primary"
            type="submit"
            onClick={handleShowModal}
          >
            CONFIRMAR COMPRA
          </Button>
        </Form>
        <OrderConfirmationForm ordernumber={OrderNumber} />
      </div>
    </div>
  );
};

export default Checkout;
