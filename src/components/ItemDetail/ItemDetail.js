import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
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
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/>
                </footer>
        </article>
    )
}

export default ItemDetail