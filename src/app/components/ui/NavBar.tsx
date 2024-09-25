"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./Navbar-menu";
import { cn } from "@/lib/utils";
 
export function NavbarComponent() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}
 
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 px-10 py-4 z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Fast Delivery</HoveredLink>
            <HoveredLink href="/interface-design">Secure Payment</HoveredLink>
            <HoveredLink href="/seo">24/7 Customer Support</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Product 1"
              href=""
              src="/desktop3.png"
              description="description for product 1."
            />
            <ProductItem
              title="Product 2"
              href=""
              src="/desktop2.png"
              description="description for product 2."
            />
            <ProductItem
              title="Product 3"
              href=""
              src="/desktop4.png"
              description="description for product 3."
            />
            <ProductItem
              title="Product 4"
              href=""
              src="/desktop1.png"
              description="description for product 4."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}