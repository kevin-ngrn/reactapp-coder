import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({item}) => {


    const[cantidad, setCantidad] = useState(1)
    const handleAgregar = () => {
        console.log({
            item,
            cantidad
        })
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
            <ItemCount handleAgregar = {handleAgregar} setCantidad={setCantidad} cantidad={cantidad} max={item.stock}></ItemCount>
            <hr/>
            <Link className="btn btn-primary" onClick={handleVolver}>Volver</Link>
        </div>
    )
}

export default ItemDetail