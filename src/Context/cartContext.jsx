import { createContext, useContext, useState } from "react";

const cartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  function addToCart(productId) {
    const existing = cartItem.find((item) => item.id === productId);

    if (existing) {
      const currentQuantity = existing.quantity;
      const updateQuantity = cartItem.map((item) =>
        item.id === productId
          ? { id: productId, quantity: currentQuantity + 1 }
          : item,
      );

      setCartItem(updateQuantity);
    } else {
      setCartItem([...cartItem, { id: productId, quantity: 1 }]);
    }
  }

  return (
    <cartContext.Provider value={{ addToCart, setCartItem, cartItem }}>
      {children}
    </cartContext.Provider>
  );
}

export function UseCart() {
  const context = useContext(cartContext);
  return context;
}
