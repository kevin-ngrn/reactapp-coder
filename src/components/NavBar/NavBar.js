import './NavBar.css'
import {CartWidget} from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom' 

export const NavBar = () => {
    return(
        <header className = "header">
            <div className='containerHeader'>
                <Link to="/" className='logoHeader'>
                <img src = "/img/logoProd.png"className='logoHeader'></img>
                </Link>   
                <div>
                    <Link to="/" className='linksHeader'>Inicio</Link>
                </div>
                <nav className='navHeader'>
                    <Link to="/productos/Carne"className='linksHeader'>Carne</Link>
                    <Link to="/productos/Vegetariano"className='linksHeader'>Vegetarianas</Link>
                    <Link to="/productos/Vegano"className='linksHeader'>Veganas</Link>
                    <Link to="/productos/Porciones"className='linksHeader'>Porciones</Link>
                    <Link to="/productos/Extras"className='linksHeader'>Extras</Link>
                    <Link to="/productos/Salsas"className='linksHeader'>Salsas</Link>
                    <Link to="/productos/Bebidas"className='linksHeader'>Bebidas</Link>
                    <CartWidget></CartWidget>
                    <Link to="/opinion"className='linkOpinion'>¡Dejanos tu opinion!</Link>
                </nav>
                
            </div>
        </header>
    )
} 