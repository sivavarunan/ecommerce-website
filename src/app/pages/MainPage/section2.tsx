'use client';
import React from "react";
import { ProductCard } from "@/app/components/ui/ProductCard";
import { useCart } from "@/app/context/Cardcontext";

const Section2 = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      imageSrc: "/desktop3.png",
      title: "pc 1",
      description:
        "The pc 1 Retro Reimagined Bred will release on February 17, 2024. Enter raffles and wait for official releases.",
      price: "$100",
    },
    {
      id: 2,
      imageSrc: "/desktop2.png",
      title: "pc classic",
      description:
        "A classic silhouette that never goes out of style.",
      price: "$120",
    },
    {
      id: 3,
      imageSrc: "/desktop4.png",
      title: "pc retro",
      description:
        "The pc Retro continues to shine with its patent leather and timeless design.",
      price: "$150",
    },
    {
      id: 4,
      imageSrc: "/desktop2.png",
      title: "pc 2",
      description:
        "The pc 2 is a combination of classic style and modern comfort. Get yours before they sell out.",
      price: "$130",
    },
    {
      id: 5,
      imageSrc: "/desktop4.png",
      title: "the pc",
      description:
        "The pc offers a sleek design that combines style with performance. A must-have for collectors.",
      price: "$140",
    },
    {
      id: 6,
      imageSrc: "/desktop3.png",
      title: "pc remaster",
      description:
        "The Pc Remaster continues to be a favorite for its timeless design and great cushioning.",
      price: "$160",
    },
  ];

  return (
    <div className="dark:bg-gradient-to-t from-slate-800 via-slate-900 to-slate-950 min-h-screen flex flex-col">
      {/* Heading */}
      <div className="text-center pt-12 pb-6">
        <h1 className="text-5xl font-bold font-sans tracking-tight">
          Store
        </h1>
        <p className="dark:text-slate-400 text-slate-600 mt-2">
          Explore our exclusive products
        </p>
      </div>

      {/* Product Showcase */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row flex-grow">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 h-full dark:text-white p-6 lg:p-12 font-sans">
          <h2 className="text-3xl font-bold my-6">Categories</h2>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gray-400">Category 1</a></li>
            <li><a href="#" className="hover:text-gray-400">Category 2</a></li>
            <li><a href="#" className="hover:text-gray-400">Category 3</a></li>
            <li><a href="#" className="hover:text-gray-400">Category 4</a></li>
          </ul>
          <h2 className="text-3xl font-bold my-6">Categories</h2>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gray-400">Category 1</a></li>
            <li><a href="#" className="hover:text-gray-400">Category 2</a></li>
            <li><a href="#" className="hover:text-gray-400">Category 3</a></li>
            <li><a href="#" className="hover:text-gray-400">Category 4</a></li>
            <li><a href="#" className="hover:text-gray-400">Category 5</a></li>
          </ul>

          
        </div>

        {/* Products Grid */}
        <div className="flex-1 p-4 lg:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              title={product.title}
              description={product.description}
              price={product.price}
              onAddToCart={() =>
                addToCart({
                  id: product.id,
                  name: product.title,
                  price: parseFloat(product.price.replace("$", "")),
                  quantity: 1,
                })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
