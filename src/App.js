import {NavBar} from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer itemId={1}/>}/>
          <Route path="*" element={<Navigate to={'/'}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
