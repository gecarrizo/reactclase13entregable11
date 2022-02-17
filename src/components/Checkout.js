import React from 'react';
import { Link } from 'react-router-dom'

const Checkout = ({createOrder}) => {
    return (
        <>
            <div>
                <div >
                    <Link to="/cart">
                        <button type="button" onClick={() => createOrder()} className="btn btn-primary btn-sm add" >Terminar mi compra</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Checkout;