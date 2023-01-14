


export const ItemList = ({productos}) => {
    return (
        <div className='container my-5'>
            <h2>Productos</h2>
            <hr/>
            <section className="row my-4">
            {productos.map((prod => (
                <div key={prod.id} className="col-4">
                    <p name={prod.name}>IMAGEN</p>
                    <p>{prod.name}</p>
                    <p>{prod.description}</p>
                    <p>Precio:<b>{prod.price}</b></p>
                    <button className="btn btn-outline-primary">Ver mas</button>
                </div>
                )
            ))}
            </section>
        </div>
    )
} 

export default ItemList