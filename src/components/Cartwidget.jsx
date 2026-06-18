import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);
  return (
    <button className="btn btn-outline-light position-relative">
      <BsCart3 size={22} />

      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {totalProducts()}
      </span>
    </button>
  );
};

export default CartWidget;