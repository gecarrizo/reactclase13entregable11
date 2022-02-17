import React, { useEffect, useState } from 'react';

const ItemCount = ({stock = 0, initial = 0, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[])

    const increment = () =>{
        if(count < stock) {
            setCount(count +1 );
        }
    }
    const decrement = () =>{
        if((count > initial) && (count > 1)) {
            setCount(count -1 );
        }
    }

    let disable = ((count <= stock) && (count > 0)) ? false : true;

    return (
        <>
                <div className="card">
                    <div className="bottom d-flex flex-row justify-content-center">
                        <div className="input-group mb-3"> 
                            <span className="input-group-text" onClick={increment}>+</span> 
                            <input type="text" id="btnAdd" className="form-control" value={count}/> 
                            <span className="input-group-text" onClick={decrement}>-</span> 
                        </div> 
                        <button type="button" disabled={disable} className="btn btn-primary btn-sm add" onClick={() => onAdd(count)}>Comprar</button>
                    </div>
                </div>
        </>
    );
}

export default ItemCount;