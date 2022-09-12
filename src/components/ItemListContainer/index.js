import ItemCount from '../ItemCount/index';
import React from 'react';
import Title from '../Title';
import CustomizedBadges from '../CartWidget';



export const ItemListContainer = ({texto}) => {
    
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