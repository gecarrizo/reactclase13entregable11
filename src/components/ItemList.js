import React from 'react';
import Item from './Item';

function ItemList({ productos }) {

  return (
    <>
        { 
            productos.length > 0
            ?         
            productos.map((producto) =>  
              <Item
                id={producto.id}
                name={producto.name}
                stock={producto.stock}
                cost={producto.cost}
                thumbnail={producto.thumbnail}
                description={producto.description} 
              />            
            )
            : <img style={{width:"200px", height:"200px"}} src="../Loader.gif" alt="Wait"/>
        }
    </>
  );
}

export default ItemList;