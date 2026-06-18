import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ detalle }) => {
    const { addToCart } = useContext(CartContext);
    const [purchase, setPurchase] = useState(false);
    const onAdd = (cantidad) => {
       addToCart({ ...detalle, quantity: cantidad });
       setPurchase(true);
    }
  return (
    <div className="card shadow border-0 p-4">
      <h2>Detalle del producto {detalle.nombre}</h2>

      <img
        src={detalle.img}
        alt={detalle.nombre}
        className="img-fluid"
      />

      <p>{detalle.descripcion}</p>
      <p>Precio: ${detalle.precio},00</p>
      <p>Stock: {detalle.stock}</p>

      {purchase ? <Link className='btn btn-primary' to="/cart">Ir al carrito</Link> : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
    </div>
  );
};

export default ItemDetail;