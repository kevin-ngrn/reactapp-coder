import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import './CartWidget.css'

export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)

    return(
        <Link to="/cart" className="cartIcon">
            <BsFillCartFill/>
            <span>{totalCantidad(0)}</span>
        </Link>      
    )
}

export default CartWidget