import{createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
const [cart, setCart] = useState([]);   
 
// Función para agregar un producto al carrito,sin repetir productos, si el producto ya existe en el carrito, se actualiza la cantidad
const addToCart = (item, qty) => {
if (isInCart(item.id)) {
setCart(cart.map((prod) => {
if (prod.id === item.id) {
return {
...prod,
quantity: prod.quantity + qty
}
}
return prod
}))
} else {
setCart([...cart, { ...item, quantity: qty }])
}
}
//Función para eliminar un producto del carrito
const removeFromCart = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
}
//Función para vaciar el carrito
const clearCart = () => {
    setCart([]);
}
//Funcion para saber si un producto ya esta en el carrito
const isInCart = (id) => {
    return cart.some(prod => prod.id === id);
}
//Funcion para saber el total a pagar
const totalPrice = () => {
    return cart.reduce((total, prod) => total + prod.precio * (prod.quantity || 1), 0);
}
//Funcion para saber la cantidad de productos en el carrito
const totalProducts = () => {
    return cart.reduce((count, prod) => count + (prod.quantity || 1), 0);
}
   
   
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, isInCart, totalPrice, totalProducts}}>
            {children}
        </CartContext.Provider>
    )
}