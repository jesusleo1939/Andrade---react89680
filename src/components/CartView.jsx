import React from "react";


const CartView = () => {
    const {cart, clear, total, deleteItem}= useContext(CartContext);
    return (
        <div>
            <h1>Carrito de compras </h1>
            <div>
            {cart.map((compra) => (
                <div key={compra.id}>
                    <p>{compra.name}</p>
                    <p>${compra.price.toFixed(2)}</p>
                    <button className="btn btn-danger" onClick={() => deleteItem(compra.id)}>Eliminar</button>
                </div>
            ))}
            </div>
            <span>Total: ${total()}</span>
            <button className="btn btn-secondary" onClick={clear}>Vaciar carrito</button>
            <button className="btn btn-primary" >Finalizar compra</button>
            
        </div>
    )
}
  