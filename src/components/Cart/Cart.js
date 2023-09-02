import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='carro'>
            <h2 className='tuCarritoTitle'>Tu Carrito</h2>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Precio Final: ${totalPrice()}</h3>
            <button onClick={() => clearCart()} className="btn btn-danger">Limpiar carrito</button>
            <Link to='/checkout' className='Option btn btn-dark'>Checkout</Link>
        </div>
    )
}

export default Cart;
