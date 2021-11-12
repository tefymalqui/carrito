import {useState} from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial)
  
  const addItem = () => {
     const newValue = count + 1 
     if(newValue <= stock){
         setCount(newValue);
     }
  };
  const quitItem = () => {
     const newValue = count - 1
     if(newValue >= initial){
        setCount(newValue);
     }
  };
  const onAdd = () => {
      const mensaje = `Agregaste ${count} producto`;
     (count === 1) ? alert(mensaje) : alert(`${mensaje}s`)
  };
    return (
        <>
            <h1>Contador</h1>
            <div>
                <button onClick={addItem} > + </button>
                <h4>{count} </h4>
                <button onClick={quitItem} > - </button>
            </div>
            <button onClick={onAdd} >Agregar al Carrito</button>
        </>
    );
};

export default ItemCount;