import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "..CartContext/CartContext"

const ItemDetail = ({item}) => {

    const {agregarCarrito, enElCarrito} = useContext(CartContext)

    const[cantidad, setCantidad] = useState(1)
    
    const handleAgregar = () => {
        {item, cantidad}
        agregarCarrito(item)
    }

    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }


    return(
        <div>
            <h2 className="nameItemDetail">{item.name}</h2>
            <img className="imgItemDetail"src={item.image}></img>
            <h5 className="descriptionItemDetail">Ingredientes:</h5>
            <p className="descriptionItemDetail">{item.description}</p>
            <small className="priceItemDetail">$ {item.price}</small>  
            <br></br>
            
            {
                !enElCarrito(id) ? <ItemCount handleAgregar = {handleAgregar} setCantidad={setCantidad} cantidad={cantidad} max={item.stock}></ItemCount>
                    : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
            }       
            <hr/>
            <Link className="btn btn-primary" onClick={handleVolver}>Volver</Link>
        </div>
    )
}

export default ItemDetail