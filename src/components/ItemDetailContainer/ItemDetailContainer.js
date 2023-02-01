import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { pedirItemId } from "../../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { itemId } = useParams()
    console.log(itemId)

    useEffect (() => {
        pedirItemId(Number(itemId))
            .then((data)=>{
                setItem(data)
            })
    }, [itemId])    

    return(
        <div className="container my-5">
            {
                item && <ItemDetail item={item}/>
            }
        </div>
    )


}




export default ItemDetailContainer