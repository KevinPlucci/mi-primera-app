import { BrowserRouter, Routes, Route } from 'react-router-dom'; // PARA IMPORTAR EL ENRUTADO

import './App.css';
import ItemListContainer from '../src/component/ItemListContainer';
import NavBar from './component/NavBar';
import ItemDetailContainer from './component/ItemDetailContainer';
import Cart from './component/Cart';


function App (){

    return(
      <BrowserRouter>
      <div className="root">
        <h1>Game Store</h1>
        <NavBar/> { /* Componente menu */}
      </div>
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting = "Hola Soy un ItemList Container"/>}/>
          <Route exact path="/consola/:idConsola" element={<ItemListContainer/>}/>
          <Route exact path="/consola/:idConsola" element = {<ItemListContainer/>}/>
          <Route exact path = "/item/:idItem" element = {<ItemDetailContainer/>}/>
          <Route exact path = "/cart" element ={<Cart/>}/>
        </Routes>
     </BrowserRouter>
    );
  }


export default App;
