"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { BRAND } from "@/constants/common";

export const NavMenu = [
  {
    title: "Features",
    url: "/features",
  },
  {
    title: "How it works",
    url: "/our-mission",
  },
  {
    title: "Pricing",
    url: "/pricing",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Feedback",
    url: "",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userFeedbackOpen, setUserFeedbackOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-[700] text-indigo-600">
            {BRAND}{" "}
            <span className="ml-1 p-1 px-3 align-middle self-center text-[10px] font-normal rounded-full bg-black text-white">
              beta
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {NavMenu.map((item) => (
              <Link
                key={item?.title}
                href={item?.url}
                className="hover:text-indigo-600 transition-colors font-[600]"
              >
                {item?.title}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="mr-4 px-8  bg-transparent border-black text-md font-[600] h-10 hover:bg-transparent"
              >
                Log In
              </Button>
            </Link>
            <Link href="/dashboard">
              <RainbowButton className="text-md font-[700]">
                Get Started
              </RainbowButton>
            </Link>
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-indigo-600" />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-lg shadow-lg">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-2">
            {NavMenu.map((item) => (
              <Link
                key={item?.title}
                href={item?.url}
                className="text-white hover:text-indigo-600 transition-colors font-[600]"
              >
                {item?.title}
              </Link>
            ))}
          </div>
          <div className="px-4 py-3">
            <Link href="/dasboard">
              <Button
                variant="outline"
                className="w-full mb-2 font-semibold bg-white text-black border-white hover:bg-neutral-200 hover:text-black"
              >
                Log In
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="w-full font-semibold bg-gray-900 text-white hover:bg-gray-950">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
