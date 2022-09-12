import React from 'react'
import ItemCount from "../components/ItemCount/ItemCount";
import ItemListContainer from './ItemListContainer';

const Home = () => {

  return (
    <div>
      <h1>View Home</h1>
      <div>
        <ItemListContainer texto="Hola, soy el texto a mostrar, aguante Diego Simon el mejor"/>
      </div>
    </div>
  )
}

export default Home