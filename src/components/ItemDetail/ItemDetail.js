import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Button } from "react-bootstrap";

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }


    return (
        <article className="CardItem">
            <div className='TarjetaDetalle'>
                    <div className='TarjetaDetalleUno'>
                        <picture>
                            <img src={img} alt={name} className="ItemImg"/>
                        </picture>
                    </div>
                    <section className='TarjetaDetalleDos'>
                        <header className="Header">
                            <h2 className="ItemHeader">
                                {name}
                            </h2>
                        </header>
                        <p className='Info'>
                            Categoria: {category}
                        </p>
                        <p className='Info TarjetaDescripcion'>
                            {description}
                        </p>
                        <p className='Info'>
                            Precio: ${price}
                        </p>
                    </section>
                </div>
            <footer className='ItemFooter'>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='Option'> <Button variant="dark" className='Button my-5' >Terminar compra</Button></Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }   
            </footer>
        </article>
    )
}

export default ItemDetail