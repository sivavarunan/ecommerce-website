'use client';
import React from "react";
import { useCart } from "@/app/context/Cardcontext";
import { FaTrash} from "react-icons/fa";
import { useRouter } from 'next/navigation'; 

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const router = useRouter(); 

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Navigate to checkout page
    router.push('/checkout'); // Adjust the path to your checkout page
  };

  return (
    <div className="p-6 dark:bg-gradient-to-tr from-slate-700 via-slate-800 to-slate-900">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {/* Conditional rendering: if cart is empty, display a message */}
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Start adding items to your cart!</p>
      ) : (
        <div className="space-y-4">
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center bg-slate-900 justify-between p-4 border-4 rounded-xl shadow-sm">
                <div>
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <span className="mr-2">Quantity:</span>
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e) => addToCart({ ...item, quantity: parseInt(e.target.value, 10) })} // Update quantity correctly
                      className="w-12 px-2 border rounded-lg bg-slate-500 text-black"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-900 transition"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <FaTrash/>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}

      {/*Checkout Button */}
      <div className="mt-6">
        <button
          onClick={handleCheckout} // Navigate to checkout
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-900 transition"
        >
        Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
