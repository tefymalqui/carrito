import { Component } from 'react';
import TitleComponent from './title/title';
import ItemCount from '../ItemCount';

const ItemListContainer = ({ greeting}) => {
    return (
        <>
          <h2>Item list </h2>
          <h3>{greeting}</h3>
          <ItemCount stock= {4} initial= {1}/>
        </>
    )
};
 
export default ItemListContainer;
