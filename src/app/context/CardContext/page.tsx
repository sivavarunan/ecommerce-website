'use client';
import React from "react";
import { useCart } from "@/app/context/Cardcontext";
import { FaTrash } from "react-icons/fa";
import { useRouter } from 'next/navigation'; 

const CartPage = () => {
  const { cartItems, updateCartItemQuantity, removeFromCart } = useCart();
  const router = useRouter(); 

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className="flex items-center justify-center h-screen dark:bg-gradient-to-tr from-slate-800 via-slate-900 to-slate-950">
      <div className="w-full max-w-md p-6 bg-slate-900 rounded-lg shadow-lg flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-100">Your Cart</h1>

        {/* Scrollable area for cart items */}
        <div className="flex-grow overflow-y-auto max-h-96"> 
          {cartItems.length === 0 ? (
            <p className="text-gray-400 text-center">Your cart is empty. Start adding items to your cart!</p>
          ) : (
            <div className="space-y-4">
              <ul className="space-y-2">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-between p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-slate-800">
                    <div className="flex flex-col">
                      <h2 className="text-lg font-semibold text-gray-100">{item.name}</h2>
                      <p className="text-gray-400">Price: ${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <span className="mr-2 text-gray-300">Quantity:</span>
                        <input
                          type="number"
                          value={item.quantity}
                          min={1}
                          onChange={(e) => updateCartItemQuantity(item.id, parseInt(e.target.value, 10))} 
                          className="max-w-[60px] w-full px-2 py-1 border border-gray-600 rounded-md bg-slate-700 text-gray-100 transition duration-150 ease-in-out focus:outline-none focus:ring focus:ring-cyan-600"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <FaTrash />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Fixed area for total and checkout button */}
        <div className="mt-6 bg-slate-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-100">Total: ${totalPrice.toFixed(2)}</h3>
          <button
            onClick={handleCheckout}
            className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200 shadow-md hover:shadow-lg mt-4"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
