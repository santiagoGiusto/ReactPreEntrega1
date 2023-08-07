import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to ='/'>
                <h3>BACO</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/tintos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Tintos</NavLink>
                <NavLink to={`/category/blancos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Blancos</NavLink>
                <NavLink to={`/category/espumantes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Espumantes</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;