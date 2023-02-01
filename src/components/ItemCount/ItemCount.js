import { useState } from "react"


export const ItemCount = ({setCantidad, cantidad, max, handleAgregar}) => {

    const handleRestar = () => {
        cantidad > 1 &&  setCantidad (cantidad - 1)
    }
    
    const handleSumar = () => {
        cantidad < max && setCantidad (cantidad + 1)
    }
    
    return(
        <div>
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar}className="btn btn-primary">+</button>
            <br></br>
            <button onClick={handleAgregar} className="btn btn-success my-3">Agregar al carrito!</button>
        </div>
    )

}







export default ItemCount