import { useState } from "react"
import { useCartContext } from "../CartContext/CartContext"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"
import './Checkout.css'

const Checkout = () => {

    const [orderId, setOrderId] = useState(null)
    const [invalido, setInvalido] = useState(false)
    
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    const {cart, totalPrice, emptyCart} = useCartContext()

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        comentarios: "",
        telefono: ""
    })

    const handleInputChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(values.nombre < "                   "){
            return setInvalido
        }
        if(values.direccion < "                             "){
            return setInvalido
        }

    const order = {
        cliente: values,
        items: cart,
        total: totalPrice()
    }
    
    const ordersRef = collection(db, 'orders')

    addDoc(ordersRef, order)
    .then((doc) => {setOrderId(doc.id) 
                    emptyCart()})

    console.log(order)
}



if(orderId){
    return(
        <div className="container divMsjFinal">
            <h2><b>¡Se ha realizado tu pedido!</b></h2>
            <img className="imgCarritoFinal" src="./img/imgCarritoFinal.png"></img>
            <p>El codigo de tu orden es: <b>{orderId}</b></p>
            <Link className="btn btn-primary btnFinalVolver" to="/">Volver al inicio</Link>
        </div>
    )
}

if(cart.length===0){
    return <Navigate to="/"/>
}
    
    return(
        <div className="divCheckout" >
            <h2 className="tituloCheckout">Terminar mi compra</h2>
            <form onSubmit={handleSubmit}>
                <h5 className="subtituloCheckout">Completa los datos para finalizar tu pedido</h5>
                <p><b>Nombre:</b></p>
                <input onChange={handleInputChange} type='text' minLength={3} maxLength={18} pattern="[A-Za-z ]+" name="nombre" value={values.nombre} placeholder={invalido ? "Campo Obligatorio" : "Nombre"} className="form-control  inputsCheckout"></input>
                <p><b>Direccion:</b></p>
                <input onChange={handleInputChange} type='text' name="direccion" minLength={3} maxLength={30} pattern="[A-Za-z0-9 ]+"  value={values.direccion} placeholder={invalido ? "Campo Obligatorio" : "Direccion"} className="form-control  inputsCheckout"></input>
                <textarea onChange={handleInputChange} type='text' className="form-control comentarioCheckout" value={values.comentarios} placeholder="Comentarios" ></textarea>
                <p><b>Telefono:</b></p>
                <input onChange={handleInputChange} type='number' name="telefono" value={values.telefono} placeholder={invalido ? "Campo Obligatorio" : "Telefono"} className="form-control  inputsCheckout"></input>
                <div className="divTotalCompra">
                    <h2>PEDIDO</h2>
                    {cart.map(item => (
                            <div key={item.id}>
                                <p><b>{item.category}</b></p>
                                <p><b>{item.cantidad} {item.name}</b></p>
                                <hr className="hrCheckout"></hr>
                            </div>  
                        ))} <h5><b>Total de la compra: {totalPrice()}</b></h5>
                </div>
                <Link onClick={handleVolver} className="btn btn-primary btn-checkout">Volver</Link>
                <button onClick={setInvalido} className="btn btn-success btn-checkout">¡Pedir!</button>
            </form>
        </div>
    )
}

export default Checkout