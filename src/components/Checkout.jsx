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

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const terminarCompra = (e) => {
    // evitar que recargue pagina
    e.preventDefault();

    if (!buyer.name || !buyer.phone || !buyer.address || !buyer.email || !buyer.email2) {
      setError("Completa los campos HDLV");
      return;
    }

    if (buyer.email !== secondMail) {
      setError("Correos no coinciden");
      return;
    }

    setError(null);

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
      .catch((error) => console.log(error));
  
      if(!cart.lenght && !orderId){
        return <EmptyCart/>
      }
    };



  return (
    <>
      <div>
        {orderId ? (
          <div>
            <h1>Gracias por tu compra, bienvenido al vicio de los monos de plástico</h1>
            <h2>Aquí tienes el código de tu orden: {orderId}</h2>
            <Link to="/" className="btn btn-dark">
              Volver a Home
            </Link>
          </div>
        ) : (
          <div>
            <h1>Finalizar Compra</h1>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={terminarCompra}>
              <input className="form-control" type="text" name="name" placeholder="Nombre" onChange={buyerData} />
              <input className="form-control" type="text" name="phone" placeholder="Teléfono" onChange={buyerData} />
              <input className="form-control" type="text" name="address" placeholder="Dirección" onChange={buyerData} />
              <input className="form-control" type="email" name="email" placeholder="Email" onChange={buyerData} />
              <input className="form-control" type="email" name="email2" placeholder="Repetir email" onChange={(e) => setSecondMail(e.target.value)} />
              <button type="submit" className="btn btn-success" disabled={loading}> {loading? "Procesando Compra": "Terminar Compra"}
                Finalizar Compra
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
