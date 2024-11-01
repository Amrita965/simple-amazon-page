
import { retriveCartFromDB } from "./cartDB";

const getProductsAndCart = async() => {

    const response = await fetch("products.json");
    const products = await response.json();
    const storedCartProducts = retriveCartFromDB();
    const storedCart = [];

    for (const id in storedCartProducts) {
        const storedProduct = products.Products.find(product => product.id === id);
        const quantity = storedCartProducts[id];
        storedProduct.quantity = quantity;
        storedCart.push(storedProduct);
    }

    return {
        products,
        storedCart
    }
    
};

export default getProductsAndCart;