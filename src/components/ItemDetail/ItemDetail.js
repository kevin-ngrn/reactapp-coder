

const ItemDetail = ({item}) => {
    return(
        <div>
            <h2>{item.name}</h2>
            <p>Tipo: {item.category}</p>
            <p>{item.image}</p>
            <p>{item.description}</p>
            <small>{item.price}</small>
        </div>
    )
}

export default ItemDetail