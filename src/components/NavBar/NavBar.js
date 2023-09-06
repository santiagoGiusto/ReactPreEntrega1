import React, { useState } from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-sm mb-0">

        <Link to="/" className="navbar-brand p-0">
          <img src="https://santiagogiusto.github.io/JsEntregaFinalSantiagoGIusto/multimedia/img/logo.png" className="logo" alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span className="navbar-dark navbar-toggler-icon mx-5"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <div className="navbar-nav ms-auto Categories">
            <NavLink
              to="/category/tintos"
            >
              TINTOS
            </NavLink>
            <NavLink
              to="/category/blancos"
            >
              BLANCOS
            </NavLink>
            <NavLink
              to="/category/espumantes"
            >
              ESPUMANTES
            </NavLink>
            <CartWidget />
          </div>
        </div>

    </nav>
  );
};

export default NavBar;