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
                <nav className='navHeader'>
                    <Link to="/" className='linksHeader'>Inicio</Link>
                    <Link to="/productos/Carne"className='linksHeader'>Carne</Link>
                    <Link to="/productos/Vegetariano"className='linksHeader'>Vegetarianas</Link>
                    <Link to="/productos/Vegano"className='linksHeader'>Veganas</Link>
                    <CartWidget></CartWidget>
                    <Link to=""className='linkOpinion'>¡Dejanos tu opinion!</Link>
                </nav>
            </div>
        </header>
    )
} 