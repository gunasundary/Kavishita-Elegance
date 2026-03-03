import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    setCart(
      cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, qty: 1 }]);
  }

  setIsCartOpen(true); // optional: auto open cart
};

  // Open / Close cart
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };
  // Clear entire cart
const clearCart = () => {
  setCart([]);
  setIsCartOpen(false);
};
// Close cart (used on checkout)
const closeCart = () => {
  setIsCartOpen(false);
};


  // Total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        toggleCart,
          closeCart, 
         addToCart,    
        removeFromCart,
        increaseQty,
        decreaseQty,
          clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}