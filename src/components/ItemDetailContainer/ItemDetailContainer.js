import { useEffect, useState } from "react"
import { pedirItemId } from "../../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = ({itemId}) => {

    const [item, setItem] = useState(null)
        console.log(item);
    useEffect (() => {
        pedirItemId(itemId)
            .then((data)=>{
                setItem(data)
            })
            .catch((error) => {
                console.log(error)
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