import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to ='/' className='NavBarLogo'>
                <img src='https://santiagogiusto.github.io/JsEntregaFinalSantiagoGIusto/multimedia/img/logo.png' className='logo'/>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/tintos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> TINTOS</NavLink>
                <NavLink to={`/category/blancos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>BLANCOS</NavLink>
                <NavLink to={`/category/espumantes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>ESPUMANTES</NavLink>
            <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;