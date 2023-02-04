import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { BsFillTrashFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import './Cart.css'



export const Cart = () => {
    
    const {cart, emptyCart, totalPrice, removeItem,} = useContext(CartContext)
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }
    
    if(cart.length===0){
        return(
        <div className="container my-5">
            <h2>¡Tu carrito esta vacio de momento!</h2>
            <hr></hr>
            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
        </div>)
    }

        return(
            <div className="container my-5">
                <h2>Tu compra</h2>
                <hr></hr>
                {
                        cart.map(item => (
                            <div className="divCart" key={item.id}>
                                <h3><b>{item.name}</b></h3>
                                <p>Categoria: <b>{item.category}</b></p>
                                <p>Cantidad: <b>{item.cantidad}</b></p>
                                <p>Precio: <b>${item.price * item.cantidad}</b></p>
                                <button className="btn btn-outline-danger" onClick={()=>removeItem(item.id)}> <BsFillTrashFill/> </button>
                                <hr></hr>
                            </div>
                        ))
                    }
                    <h4>Total: ${totalPrice()}</h4>
                <hr></hr>
                <button className="btn btn-danger" onClick={emptyCart}>Vaciar</button>
                <button className="btn btn-success botonPedir">Pedir!</button>
                <hr></hr>
                <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
            </div>
        )
}