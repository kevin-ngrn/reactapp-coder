import './NavBar.css'
import {CartWidget} from './CartWidget';

export const NavBar = () => {
    return(
        <header className = "header">
            <div className='containerHeader'>
                <h1 className='logoHeader'>LOGO</h1>
                <h1 className='nombrePag'>~ Coffee Point ~</h1>
                <nav className='navHeader'>
                    <a href='#' className='linksHeader'>Home</a>
                    <a href='#' className='linksHeader'>Café</a>
                    <a href='#' className='linksHeader'>Nosotros</a>
                    <CartWidget></CartWidget>
                    <p>0</p>
                </nav>
                </div>
        </header>
    )
}