
const CartWidget = (props) =>
{
    return(
        <div className="float-end cart mt-2">
            <img className="img-fluid imgCart" src={props.imagen} alt="cart" />
            {
            props.cantidad > 0 ?
            <span className="cart-quantity">{props.cantidad}</span>
            : <span className="cart-empty"></span>
            }
        </div>
    )
}

export default CartWidget;