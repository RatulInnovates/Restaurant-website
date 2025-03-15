import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartEffect, setCartEffect] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });

    // Trigger cart effect with a unique identifier
    setCartEffect(true);
    setTimeout(() => setCartEffect(false), 300); // Reset effect after 300ms
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (!existingItem) {
        console.warn("Item not found in cart:", item.id);
        return prevItems; // Return previous state if item not found
      }
      if (existingItem.quantity === 1) {
        return prevItems.filter((i) => i.id !== item.id);
      } else {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, cartEffect }}
    >
      {children}
    </CartContext.Provider>
  );
};
