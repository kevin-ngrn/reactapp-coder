import {NavBar} from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { Footer } from './components/Footer.js/Footer';
import { CartContext } from './components/CartContext/CartContext';
import { useState } from 'react';


function App() {

    const [cart, setCart] = useState([])
    const agregarCarrito = (item) => {
      setCart([...cart, item])
    }
    const enElCarrito = (id) => {
      return cart.some(item => item.id === id)
    }
  
  return (
    <CartContext.Provider value={{cart, agregarCarrito, enElCarrito}}>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/detail/:itemId" element={<ItemDetailContainer itemId={1}/>}/>
            <Route path="*" element={<Navigate to={'/'}/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
