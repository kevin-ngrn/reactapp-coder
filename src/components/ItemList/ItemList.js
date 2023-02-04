import { Link } from "react-router-dom"
import './ItemList.css'
import { useParams } from 'react-router-dom'


export const ItemList = ({productos}) => {
    
    const { categoryId } = useParams()

    return (
        <div className='container my-5'>
            <hr/>
                <h3>Todos los productos: {categoryId}</h3>
            <section className="row my-4">
            {productos.map((prod => (
                <div key={prod.id} className="col-4 divProdItemList" >
                    <p className="nameItemList"><b className="nameBurger">{prod.name}</b></p>
                    <img src={prod.image}></img>
                    <br></br>
                    <Link to={`/detail/${prod.id}`} className="btn btn-outline-primary btnItemList">Detalle</Link>
                </div>
                )
            ))}
            </section>
        </div>
    )
} 

export default ItemList