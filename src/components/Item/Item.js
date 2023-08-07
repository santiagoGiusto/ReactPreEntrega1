import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture className='imgCard'>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info Precio">
                    Precio: ${price}
                </p>
                <p className='Info Stock'>
                    Stock Disponible:{stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option Detalle'>Ver detalle</Link>
            </footer>
        </article>
    )
};

export default Item