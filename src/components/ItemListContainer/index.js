import ItemCount from '../ItemCount/ItemCount';
import React from 'react';
import Title from '../Title';
import CustomizedBadges from '../CartWidget';



const ItemListContainer = ({texto}) => {
    
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    
    return ( 
        <>
            <CustomizedBadges/>
            <Title greeting={texto}/>
            <ItemCount initial={3} stock={5} onAdd={onAdd}/>
        </>
     );
}
 
export default ItemListContainer;