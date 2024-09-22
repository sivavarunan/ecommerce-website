import React from "react";
import { ProductCard } from '@/app/components/ui/ProductCard'

const Section2 = () => {
  const products = [
    {
      id: 1,
      imageSrc: "/desktop3.png",
      title: "Air Jordan 4 Retro",
      description:
        "The Air Jordan 4 Retro Reimagined Bred will release on February 17, 2024. Enter raffles and wait for official releases.",
      price: "$100",
    },
    {
      id: 2,
      imageSrc: "/desktop2.png",
      title: "Air Jordan 1 High OG",
      description:
        "A classic silhouette that never goes out of style. Grab your pair of the timeless Air Jordan 1.",
      price: "$120",
    },
    {
      id: 3,
      imageSrc: "/desktop4.png",
      title: "Air Jordan 11 Retro",
      description:
        "The Air Jordan 11 Retro continues to shine with its patent leather and timeless design.",
      price: "$150",
    },
    {
      id: 4,
      imageSrc: "/desktop2.png",
      title: "Air Jordan 3 Retro",
      description:
        "The Air Jordan 3 is a combination of classic style and modern comfort. Get yours before they sell out.",
      price: "$130",
    },
    {
      id: 5,
      imageSrc: "/desktop4.png",
      title: "Air Jordan 6 Retro",
      description:
        "The Air Jordan 6 offers a sleek design that combines style with performance. A must-have for collectors.",
      price: "$140",
    },
    {
      id: 6,
      imageSrc: "/desktop3.png",
      title: "Air Jordan 5 Retro",
      description:
        "The Air Jordan 5 Retro continues to be a favorite for its timeless design and great cushioning.",
      price: "$160",
    },
  ];

  return (
    <div className="">
      {/* Adjust the margin and padding for reduced space */}
      <h1 className="text-4xl font-semibold font-mono text-white pt-8 pb-4 ml-24">
        STORE
      </h1>
      <div className="bg-gradient-to-t from-slate-800 via-slate-900 to-slate-950 h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex">
          {/* Sidebar */}
          <div className="w-1/4 h-full text-white p-12">
            <h2 className="text-3xl font-bold mb-6">Categories</h2>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gray-400">Category 1</a></li>
              <li><a href="#" className="hover:text-gray-400">Category 2</a></li>
              <li><a href="#" className="hover:text-gray-400">Category 3</a></li>
              <li><a href="#" className="hover:text-gray-400">Category 4</a></li>
            </ul>
          </div>

          {/* Product Showcase */}
          <div className="flex-1 p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                imageSrc={product.imageSrc}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
