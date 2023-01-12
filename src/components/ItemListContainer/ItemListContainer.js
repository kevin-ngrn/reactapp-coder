import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import stock from '../../Data/Mock_Data.json'
import Item from '../Item/Item.js'


export const ItemListContainer = () => {

const pedirDatos = () => {
        return new Promise ((resolve) =>{
            setTimeout (() => {          
                resolve (stock)   
            }, 2000)
        })
    } 

const  [stock, setStock] = useState ([])

    useEffect (() => {
        pedirDatos()
            .then((res)=> {
                console.log(res);
            })
            .catch((err) =>{
                console.log(err);
            })
    }, [])

    return (
        <div className='container my-5 '>
        </div>
    )

}

export default ItemListContainer