'use client'
import React from "react";
import { useCart } from "@/app/context/Cardcontext";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const handleAddItem = () => {
    const newItem = { id: Date.now(), name: "New Product", price: 100, quantity: 1 };
    addToCart(newItem);
  };

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default CartPage;