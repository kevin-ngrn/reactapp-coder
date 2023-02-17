import { useState } from "react"
import "./OpinionScreen.css"


const OpinionScreen = () => {

    const [values, setValues] = useState({
        name:'',
        email: '',
        textarea: ''})

    const inputChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('values', JSON.stringify(values))
    }

    return(
    <div>
        <h2 className="h2Form">¡Nos gustaria conocer tu experiencia en Burger Point!</h2>
        <hr></hr>
        <div className="divForm">
        <form onSubmit={handleSubmit}>
            <h4>Nombre:</h4>
            <input name="name" onChange={inputChange} className="form-control" type="text" value={values.name}></input>
            <h4>Email:</h4>
            <input name="email" onChange={inputChange} className="form-control" type="email" value={values.email}></input>
            <textarea name="textarea" onChange={inputChange} className="form-control inputMensaje" type="text" value={values.textarea} placeholder="¡Dejanos tu comentario!"></textarea>
            <button className="btn btn-primary btnEnviar">Enviar</button>
        </form>
        </div>
    </div>
    )
}

export default OpinionScreen