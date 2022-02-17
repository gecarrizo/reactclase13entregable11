import React from 'react';
import { Link } from 'react-router-dom'

function ItemCheckout() {
    return (
        <>
            <div className="card">
                <div className="bottom d-flex flex-row justify-content-center">
                    <Link to="/cart">
                        <button type="button" className="btn btn-danger btn-sm add" >Checkout</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ItemCheckout