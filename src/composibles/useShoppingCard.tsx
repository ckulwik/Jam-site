import { useState } from "react";
import type { Product } from "../consts";

const useShoppingCart = () => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (product: Product) => {
        setCart(cart.filter(item => item !== product));
    };

    return { cart, addToCart, removeFromCart };
};

export default useShoppingCart;