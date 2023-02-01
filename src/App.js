import {NavBar} from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { Footer } from './components/Footer.js/Footer';
import { CartContext } from './components/cartContext/cartContext';


function App() {

    const provider = ''
  
  
  return (
    <CartContext.Provider value={provider}>
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
