import './NavBar.css'

export const NavBar = () => {
    return(
        <header className = "header">
            <div className='containerHeader'>
                <h1 className='logoHeader'>LOGO</h1>
                <h1 className='nombrePag'> CAFE RACER </h1>
                <nav className='navHeader'>
                    <a href='#' className='linksHeader'>Home</a>
                    <a href='#' className='linksHeader'>Modelos</a>
                    <a href='#' className='linksHeader'>Nosotros</a>
                </nav>
                </div>
        </header>
    )
}