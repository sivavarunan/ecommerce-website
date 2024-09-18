import React from "react";
import Link from "next/link";
import { NavbarComponent } from "@/app/components/ui/NavBar"; 

const HomePage = () => {
    return (
        <div>
      
            <NavbarComponent />

            <main className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">
                    Welcome to <span className="text-blue-600">My Page</span>!
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    How are  <code className="bg-gray-200 p-1 rounded"> you</code>
                </p>

                <Link href="/about" className="text-blue-500 underline">
                    Go to About Page
                </Link>
            </main>
        </div>
    );
}

export default HomePage;
