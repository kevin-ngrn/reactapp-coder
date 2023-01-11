import {NavBar} from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Nosotros } from './Nosotros/Nosotros';
import { Item } from './components/Item/Item';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer encabezado={"Bienvenido/a"}/>}/>
          <Route path='/Productos' element={<ItemListContainer encabezado={"Hamburguesas"}/>}/>
          <Route path='/category/:id'element={<ItemListContainer encabezado={"Categorias"}/>}/>
          <Route path='/item/:id'element={<ItemDetailContainer/>}/>
          <Route path='/Nosotros' element={<Nosotros/>}/>
          <Route path='*' element={<Navigate to={'/'}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
