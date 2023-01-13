import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import mock from '../../Data/Mock_Data.json'
import Item from '../Item/Item.js'


export const ItemListContainer = () => {


const  [productos, setProductos] = useState ([])


const pedirDatos = () => {
        return new Promise ((resolve) =>{
            setTimeout (() => {          
                resolve (mock)   
            }, 2000)
        })
    } 


    useEffect (() => {
        pedirDatos()
            .then((res)=> {
                setProductos(res);
            })
            .catch((err) =>{
                console.log(err);
            })
    }, [])


    return (
        <div className='container my-5'>
            <h2>Productos</h2>
            <hr/>
            
            {productos.map((prod => (
                <div>
                    <p name={prod.name}>IMAGEN</p>
                    <p>{prod.name}</p>
                    <p>{prod.description}</p>
                    <p>Precio:<b>{prod.price}</b></p>

                </div>
            )))}
        </div>
    )

}

export default ItemListContainer