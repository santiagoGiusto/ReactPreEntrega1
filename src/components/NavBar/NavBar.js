import CartWidget from "../CartWidget/CartWidget";
import { Button } from "react-bootstrap";
import  Navbar  from 'react-bootstrap/Navbar';
import  Nav  from "react-bootstrap/Nav";




const NavBar = () => {
    return (
        <Nav className="flex-column my-4">
            <h3>CoderHouse react - Pre entrega 1 - Santiago Giusto</h3>
            <Navbar className="d-flex justify-content-around my-4" bg="warning" data-bs-theme="dark">
                <Button variant="outline-dark" >BOTON 1</Button>
                <Button variant="outline-dark">BOTON 2</Button>
                <Button variant="outline-dark">BOTON 3</Button>
             </Navbar>
         <CartWidget/>
        </Nav>
    )
}

export default NavBar;