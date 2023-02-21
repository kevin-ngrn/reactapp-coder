import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList.js'
import { Navigate, useParams } from 'react-router-dom'
import Inicio from '../Inicio/Inicio'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from "../../firebase/config"



export const ItemListContainer = () => {


const [productos, setProductos] = useState ([])
const { categoryId } = useParams()

    useEffect (() => {
        const productosRef = collection(db, "productos")
        const q = categoryId 
            ? query(productosRef, where("category", "==", categoryId)) 
            : productosRef
            
        getDocs(q)
        .then((resp) => {
            setProductos(resp.docs.map((doc)=>{
                return{
                    ...doc.data(),
                    id: doc.id
                }
            }));
        })
    }, [categoryId])




    return (
        <div>
            <Inicio/>
            <ItemList productos={productos}/>
        </div> 
    )

}

export default ItemListContainer