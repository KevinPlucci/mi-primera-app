import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // PARA IMPORTAR EL ENRUTADO

import './App.css';
import ItemListContainer from '../src/component/ItemListContainer';
import NavBar from './component/NavBar';
import ItemDetailContainer from './component/ItemDetailContainer';
import Cart from './component/Cart';


function App (){

    return(
      <Router> 

     <div className = "root"> 

       <h1>Game Store</h1>

      <NavBar/> {/* Componente menu */}

      <Routes> 

        <Route exact path = '/'> 
      <ItemListContainer greeting = "Hola Soy un ItemListContainer "/> 
      </Route>

      <Route exact path='/consola/:idConsola'>
        <ItemListContainer/>
      </Route>

      

      <Route exact path='/consola/:idConsola'>
        <ItemListContainer/>
      </Route>
      <Route exact path = '/item/:idItem' component = {ItemDetailContainer}/> {/* SEGUNDA FORMA PARA DEFINIR EL ENRUTADO */}
      <Route exact path = '/cart' component = {Cart} />
      </Routes>
     </div>

     </Router>
    );
  }


export default App;