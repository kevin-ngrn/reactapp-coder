import './NavBar.css'
import {CartWidget} from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom' 

export const NavBar = () => {
    return(
        <header className = "header">
            <div className='containerHeader'>
                <Link to="/" className='logoHeader'>
                <h1 className='logoHeader'>LOGO</h1>
                </Link>   
                <h1 className='nombrePag'>~ Burger Point ~</h1>
                <nav className='navHeader'>
                    <Link to="/" className='linksHeader'>Inicio</Link>
                    <Link to="/productos"className='linksHeader'>Hamburguesas</Link>
                    <CartWidget></CartWidget>
                </nav>
            </div>
        </header>
    )
} 