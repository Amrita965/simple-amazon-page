import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    
    const [cartProducts, setCartProducts] = useState([]);

    const addToCart = (product) => {
        setCartProducts(
            [...cartProducts, product]
        );
    }

    console.log(cartProducts);

    return (
        <CartContext.Provider value={{
            cartProducts,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;