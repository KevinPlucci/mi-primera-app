import { createContext } from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom'; // PARA IMPORTAR EL ENRUTADO
import './App.css';
import ItemListContainer from '../src/component/ItemListContainer';
import NavBar from './component/NavBar';
import ItemDetailContainer from './component/ItemDetailContainer';
import Cart from './component/Cart';
import CartContextProvider from './component/cartContext';
import Footer from './component/Footer';



export const contextApp = createContext('Dato') //para crear un contexto y saltear la regla de unidireccional- por defecto va a inicializar con el valor de dato

function App (){


    return(

      <CartContextProvider>
      
      <BrowserRouter>
      <div className="root">
        <h1>Game Store</h1>
        <NavBar/> { /* Componente menu */}
      </div>
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting = "JUEGOS"/>}/>
          <Route exact path="/consola/:idConsola" element={<ItemListContainer/>}/>
          <Route exact path="/consola/:idConsola" element = {<ItemListContainer/>}/>
          <Route exact path = "/item/:idItem" element = {<ItemDetailContainer/>}/>
          <Route exact path = "/cart" element ={<Cart/>}/>
        </Routes>
        <Footer/>
     </BrowserRouter>

     </CartContextProvider>
    );
  }


export default App;