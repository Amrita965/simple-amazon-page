import { toast } from "react-toastify";

const retriveCartFromDB = () => {
    const storedCartProducts = localStorage.getItem("Cart Products");
    if (storedCartProducts) {
        return JSON.parse(storedCartProducts);
    }
    return {};
}

const addToDB = (productId) => {
    
    let storedCartProducts = retriveCartFromDB();

    if (storedCartProducts[productId]) {
        const quantity = storedCartProducts[productId];
        storedCartProducts[productId] = quantity + 1;
    } else {
        storedCartProducts[productId] = 1;
    }

    localStorage.setItem("Cart Products", JSON.stringify(storedCartProducts));

    toast("Item has been successfully added to your cart!", {
        position: "top-center"
    });
    
};

const removeFromDB = (productId) => {
    const storedCartProducts = retriveCartFromDB();
    delete storedCartProducts[productId];
    localStorage.setItem("Cart Products", JSON.stringify(storedCartProducts));
    toast("Product removed from cart successfully!", {
        position: "top-center"
    });
}


export {
    addToDB,
    retriveCartFromDB,
    removeFromDB
}