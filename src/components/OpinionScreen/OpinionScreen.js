import "./OpinionScreen.css"


const OpinionScreen = () => {

    return(
    <div>
        <h2 className="h2Form">¡Nos gustaria conocer tu experiencia con Burger Point!</h2>
        <hr></hr>
        <div className="divForm">
        <form className="imgForm">
            <h4>Nombre:</h4>
            <input className="form-control" type={"text"}></input>
            <h4>Email:</h4>
            <input className="form-control" type={"email"}></input>
            <textarea className="form-control inputMensaje" type={"text"} placeholder="¡Dejanos tu comentario!"></textarea>
        </form>
        </div>
    </div>
    )
}

export default OpinionScreen