import { createContext, useEffect, useState } from "react";
import { addToDB, removeFromDB } from "../utilities/cartDB";
import getProductsAndCart from "../utilities/productsAndCartLoader";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { storedCart } = await getProductsAndCart();
      setCartProducts(storedCart);
    })();
  }, []);

  const handleAddToCart = (selectedProduct) => {
    let newCartProducts = [];
    const existProduct = cartProducts.find(
      (cartProduct) => cartProduct.id === selectedProduct.id
    );

    if (existProduct) {
      const restCartProducts = cartProducts.filter(
        (cartProduct) => cartProduct.id != existProduct.id
      );
      existProduct.quantity += 1;
      newCartProducts = [existProduct, ...restCartProducts];
    } else {
      selectedProduct.quantity = 1;
      newCartProducts = [selectedProduct, ...cartProducts];
    }
    setCartProducts(newCartProducts);
    addToDB(selectedProduct.id);
  };

  const handleRemoveFromCart = (selectedProduct) => {
    const restCartProducts = cartProducts.filter(
      (cartProduct) => cartProduct.id !== selectedProduct.id
    );
    setCartProducts(restCartProducts);
    removeFromDB(selectedProduct.id);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
