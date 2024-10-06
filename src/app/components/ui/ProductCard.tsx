"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  onAddToCart: () => void;
}

export function ProductCard({
  imageSrc,
  title,
  description,
  price,
  onAddToCart,  
}: ProductCardProps) {
  return (
    <BackgroundGradient className="rounded-[22px] w-auto h-full p-4 bg-white dark:bg-slate-950 dark:bg-opacity-90">
      <div className="h-40 flex justify-center p-2">
        <Image
          src={imageSrc}
          alt={title}
          height={160}
          width={160}
          className="object-contain"
        />
      </div>
      <p className="text-sm sm:text-lg text-black mt-8 dark:text-neutral-200">
        {title}
      </p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 ">
        {description}
      </p>
      <button
        onClick={onAddToCart} 
        className="rounded-full px-3 py-1 text-white bg-black mt-2 text-xs font-bold dark:bg-slate-800"
      >
        Buy now - {price}
      </button>
    </BackgroundGradient>
  );
}
