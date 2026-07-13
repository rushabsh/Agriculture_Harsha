"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Search, ShoppingBasket, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", dropdown: false },
  { name: "About Us", href: "/about", dropdown: false },
  { name: "Products", href: "/products", dropdown: false },
  { name: "Industries We Serve", href: "/industries", dropdown: false },
  { name: "Contact Us", href: "/contact", dropdown: false },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Navbar Container: Flexible width matching desktop/mobile bounds */}
      <header className="absolute w-[100%] sm:w-[100%] lg:w-[100%] m-auto left-0 right-0 z-[110]">
        <div className="w-full">
          <div className="flex h-24 items-center justify-between bg-white px-4 sm:px-6 shadow-lg border border-gray-100/50">

            {/* 1. Left: Logo & Vertical Separator */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/" className="flex items-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="GreenGlobe"
                  width={140}
                  height={42}
                  priority
                  className="w-auto h-24 sm:h-24 object-contain"
                />
              </Link>
              <div className="hidden h-8 w-px bg-gray-200 md:block" />
            </div>

            {/* 2. Center: Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item, index) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
                return (
                  <div key={index} className="relative group">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 rounded-full px-4 xl:px-5 py-2.5 text-[15px] font-medium transition-all duration-300 hover:bg-[#F8F6F2] ${isActive ? "bg-[#F8F6F2] text-black font-bold" : "text-gray-700 hover:text-black"
                        }`}
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* 3. Right Side: Utility Icons, Action Button & Mobile Burger */}
            <div className="flex items-center gap-2 sm:gap-4 md:gap-6">

              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#FDF0B4] px-6 py-3 text-[14px] font-bold text-black transition-all duration-300 hover:bg-[#fae68f] shadow-xs"
              >
                Get in Touch
              </Link>

              {/* Mobile Menu Icon Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 lg:hidden text-gray-700 hover:text-black rounded-full hover:bg-[#F8F6F2] transition-colors"
                aria-label="Toggle Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 4. Responsive Mobile Sidebar Drawer Overlay */}
      {/* ========================================================================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          {/* Backdrop Blur Layer */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          />

          {/* Drawer Menu Surface */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white p-6 shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-200">
            <div>
              {/* Header Container Inside Drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <Image
                  src="/logo.png"
                  alt="GreenGlobe"
                  width={120}
                  height={36}
                  className="object-contain"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Vertical Nav Stack */}
              <nav className="flex flex-col gap-2 mt-6">
                {navItems.map((item, index) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-[16px] font-medium transition-colors ${isActive
                        ? "bg-[#F8F6F2] text-black font-bold"
                        : "text-gray-700 hover:bg-gray-50 hover:text-black"
                        }`}
                    >
                      <span>{item.name}</span>
                      {item.dropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Section Inside Drawer */}
            <div className="pt-6 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full rounded-full bg-[#FDF0B4] py-3.5 text-[15px] font-bold text-black transition-colors hover:bg-[#fae68f]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}