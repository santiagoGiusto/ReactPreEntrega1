import { useState } from 'react'
import { Button } from "react-bootstrap";
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className='Counter' >
            <div className='Controls d-flex justify-content-center my-5'> 
                <Button variant="dark" size="lg" className='Button' onClick={decrement}>-</Button>
                <h4 className='Number mx-5'>{quantity}</h4>
                <Button variant="dark" size="lg" className='Button' onClick={increment}>+</Button>
            </div>
            <div>
                <Button  variant="dark" className='Button my-4' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}


export default ItemCount;