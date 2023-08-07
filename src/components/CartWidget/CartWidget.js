import './CartWidget.css'
import carrito from './assets/carrito.png';

const CartWidget = () => {
    return (
        <div className='carritoNumero'>
            <img src={carrito} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget;