import {NavBar} from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='ItemListContainer'>
      <ItemListContainer greeting={"Bienvenido/a"}/>
      </div>
    </div>
  );
}

export default App;
