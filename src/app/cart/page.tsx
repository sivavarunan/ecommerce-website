// pages/cart.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      quantity: 2,
      image: "/desktop4.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      quantity: 1,
      image: "/desktop3.png",
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-800 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      <div className="max-w-4xl mx-auto bg-slate-700 p-4 rounded-lg shadow-lg">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-between items-center">
          <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          <Link href="/checkout" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
