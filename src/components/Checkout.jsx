import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { db } from "../service/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import EmptyCart from "./EmptyCart";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [secondMail, setSecondMail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const terminarCompra = (e) => {
    e.preventDefault();

    if (
      !buyer.name ||
      !buyer.phone ||
      !buyer.address ||
      !buyer.email ||
      !secondMail
    ) {
      setError("Completa todos los campos");
      return;
    }

    if (buyer.email !== secondMail) {
      setError("Los correos no coinciden");
      return;
    }

    setError(null);
    setLoading(true);

    const order = {
      comprador: buyer,
      carrito: cart,
      total: totalPrice(),
      fecha: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((error) => {
        console.log(error);
        setError("Hubo un error al generar la orden");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <div className="container mt-5">
      {orderId ? (
        <div className="text-center">
          <h1>Gracias por tu compra</h1>

          <h2>
            Código de orden:
          </h2>

          <p className="fw-bold">{orderId}</p>

          <Link to="/" className="btn btn-dark">
            Volver a Home
          </Link>
        </div>
      ) : (
        <div>
          <h1>Finalizar Compra</h1>

          {error && <p className="text-danger">{error}</p>}

          <form onSubmit={terminarCompra}>
            <input
              className="form-control mb-3"
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={buyerData}
            />

            <input
              className="form-control mb-3"
              type="text"
              name="phone"
              placeholder="Teléfono"
              onChange={buyerData}
            />

            <input
              className="form-control mb-3"
              type="text"
              name="address"
              placeholder="Dirección"
              onChange={buyerData}
            />

            <input
              className="form-control mb-3"
              type="email"
              name="email"
              placeholder="Email"
              onChange={buyerData}
            />

            <input
              className="form-control mb-3"
              type="email"
              name="email2"
              placeholder="Repetir email"
              onChange={(e) => setSecondMail(e.target.value)}
            />

            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? "Procesando compra..." : "Finalizar compra"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;