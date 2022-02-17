import React from 'react';
import { Link } from 'react-router-dom';

function Item({id, name, stock, cost, thumbnail, description}) {
    return (
        <>
        <div>
            <figure className="snip">                
                <h4>{name}</h4>
                <div className="imageDiv">
                    <img className="slide1 imgMin" src={thumbnail} alt={name}/>
                </div>
                <figcaption>
                    <p>{description}</p>    
                    <div className="cost">
                        <p>${cost}</p>
                    </div>
                    <p>{stock} unidades en stock</p>
                </figcaption>
                <Link className="detail" to={`/item/${id}`}>Detalle</Link>
            </figure>
        </div>
        </>
    );
}

export default Item