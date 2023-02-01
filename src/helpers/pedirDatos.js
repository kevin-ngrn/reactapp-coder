import mock from '../Data/Mock_Data.json'

export const pedirDatos = () => {
    return new Promise ((resolve) =>{
        setTimeout (() => {          
            resolve (mock)   
        }, 1000)
    })
}


export const pedirItemId = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const item = mock.find((el) => el.id === id)
            if(item){
            resolve (item)
            }else{
            reject ({
                error: 'No se encontro ese producto'
            })
            }
        }, 1000)
    })
}

