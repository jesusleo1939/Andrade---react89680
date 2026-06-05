import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <button className="btn btn-outline-light position-relative">
      <BsCart3 size={22} />

      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        3
      </span>
    </button>
  );
};

export default CartWidget;