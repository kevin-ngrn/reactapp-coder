import mock from '../Data/Mock_Data.json'

export const pedirDatos = () => {
    return new Promise ((resolve) =>{
        setTimeout (() => {          
            resolve (mock)   
        }, 2000)
    })
}