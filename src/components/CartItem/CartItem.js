import './CartItem.css' 
import { CartContext } from '../../context/CartContext'
import React from 'react';
import { useContext } from 'react';



const CartItem = ({ id, name, price, quantity}) => {

    const { removeItem } = useContext(CartContext)

    return (

        <article className='CartItem'>

            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>

            <section>
                <h3 className='InfoCart'>
                    Precio: ${price}
                </h3>
            </section>

            <section>
                <h4 className='InfoCart'>
                    Cantidad: {quantity}
                </h4>
            </section>
            <section>
                <h4 className='InfoCart'>
                    Subtotal: ${price * quantity}
                </h4>
            </section>

            {/* <section>
                <h3>Total a pagar: ${total}</h3>
            </section> */}

            <section>
                <button className='btn btn-danger ' onClick={() => removeItem(id)}>Eliminar</button>
            </section>
        </article>
    )
}

export default CartItem