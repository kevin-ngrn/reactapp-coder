import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList.js'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {


const [productos, setProductos] = useState ([])
const { categoryId } = useParams()

    useEffect (() => {
        pedirDatos()
            .then((res)=> {
                if (categoryId) {
                    setProductos(res.filter (prod => prod.category === categoryId))
                } else {
                    setProductos(res)
                }
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <ItemList productos={productos}/>
        </div> 
    )

}

export default ItemListContainer