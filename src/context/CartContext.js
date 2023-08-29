import { createContext, useState} from "react"

export const CartContext = createContext({
    cart: []
})


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!IsInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const IsInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQuantity = () => {
        let quantity = 0;
        cart.forEach(item => {
            quantity += item.quantity;
        });
        return quantity;
    };


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
            { children }
        </CartContext.Provider>
    )
}