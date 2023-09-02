import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, { ...item, quantity }])
        } else {
            console.error('El producto ya fue agregado')
        }        
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId)
    }

    const totalQuantity = () => {
        let quantity = 0
        cart.forEach((item) => {
            quantity += item.quantity
        })
        return quantity
    }

    const totalPrice = () => {
        let total = 0
        cart.forEach((item) => {
            total += item.price * item.quantity
        })
        return total
    }

    const increaseQuantity = (itemId) => {
        const updatedCart = cart.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
        setCart(updatedCart)
    }

    const decreaseQuantity = (itemId) => {
        const updatedCart = cart.map((item) =>
            item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        )
        setCart(updatedCart)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
}