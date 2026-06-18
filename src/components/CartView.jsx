import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartView = () => {
    const { cart, clearCart, totalPrice, removeFromCart } = useContext(CartContext);
    return (
        <div>
            <h1>Carrito de compras </h1>
            <div>
            {cart.map((compra) => (
                <div key={compra.id}>
                    <p>{compra.nombre}</p>
                    <p>${compra.precio.toFixed(2)}</p>
                    <button className="btn btn-danger" onClick={() => removeFromCart(compra.id)}>Eliminar</button>
                </div>
            ))}
            </div>
            <span>Total: ${totalPrice().toFixed(2)}</span>
            <button className="btn btn-secondary" onClick={clearCart}>Vaciar carrito</button>
            <Link className="btn btn-primary" to="/checkout">
                Finalizar compra
            </Link>
        </div>
    )
}
  
export default CartView;