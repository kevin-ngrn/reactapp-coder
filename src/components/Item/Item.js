



export const Item = ({id, name, description, image, price, category}) => {
    return(
        <div>
            <img src={image} alt={name}></img>
            <h4>{name}</h4>
            <p>{price}</p>
            <p>{description}</p>
            <small>{category}</small>
        </div>
    )
} 

export default Item