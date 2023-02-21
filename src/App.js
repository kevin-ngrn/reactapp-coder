import {NavBar} from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { Footer } from './components/Footer.js/Footer';
import {CartProvider} from './components/CartContext/CartContext'
import { Cart } from './components/Cart/Cart';
import OpinionScreen from './components/OpinionScreen/OpinionScreen';
import Checkout from './components/Checkout/Checkout';




function App() {

  return (
    <CartProvider >
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/detail/:itemId" element={<ItemDetailContainer itemId={1}/>}/>
            <Route path="*" element={<Navigate to={'/'}/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="/opinion" element={<OpinionScreen/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
