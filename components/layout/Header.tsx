"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navigation = [
  { name: "Course", href: "/course" },
  { name: "Blogs", href: "/blogs" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="max-w-[1248px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[120px] h-[40px] sm:w-[140px] sm:h-[48px]">
              {/* Logo Icon styling based on new image */}
              <Image
                src="/assets/logo.jpeg"
                alt="Teachifyy Logo"
                fill
                priority
                sizes="(max-width: 768px) 120px, 140px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#111827] hover:text-[#FF4D67] transition-colors font-sans text-[15px]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/start">
              <button className="bg-[#FF4D67] text-white font-medium text-[15px] pt-[12px] pb-[12px] px-[24px] rounded-[4px] hover:bg-[#ff3b57] transition-all shrink-0">
                Start Here
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700 hover:text-[#1F4862]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-[#111827] hover:text-[#FF4D67] transition-colors font-sans text-[15px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-[fit-content] bg-[#FF4667] text-white font-[400] text-[24px] pt-[12px] pb-[12px] px-[12px] rounded-[4px]">
              Start Here
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
