import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([]);

    const agregarCarrito = (item) => {
        setCart([...cart, item])
    }
    const enElCarrito = (id) => {
        return cart.some(item => item.id === id)
    }
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }
    const emptyCart = () => {
        setCart([])
    }
    const totalCantidad = () => {
        return cart.reduce((acc, item)=>acc+item.cantidad,0)
    }
    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
    }
    return(
        <CartContext.Provider value={{cart, agregarCarrito, enElCarrito, emptyCart, totalPrice, removeItem, totalCantidad}}>
            {children}
        </CartContext.Provider>
    )

}

