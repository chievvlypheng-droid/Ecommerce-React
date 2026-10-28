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

  function increment(id) {
    setCartItem((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }
  function decrement(productId) {
    setCartItem((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }
  function placeOrder() {
    setCartItem([]);
    alert("successfully order");
  }

  function removeFromCart(productID) {
    setCartItem(cartItem.filter((item) => item.id !== productID)); // keep only the item that not match the id of the click button
  }

  return (
    <cartContext.Provider
      value={{
        addToCart,
        setCartItem,
        cartItem,
        increment,
        decrement,
        removeFromCart,
        placeOrder,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function UseCart() {
  const context = useContext(cartContext);
  return context;
}
