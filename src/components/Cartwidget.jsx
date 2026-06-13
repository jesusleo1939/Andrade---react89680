import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const {cart, totalProducts} = useContext(CartContext);
  const carrito = useContext(CartContext);
  return (
    <button className="btn btn-outline-light position-relative">
      <BsCart3 size={22} />

      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {carrito.totalProducts()}
      </span>
    </button>
  );
};

export default CartWidget;