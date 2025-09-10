"use client";
import { useState } from "react";
import Link from "next/link";
import "../styles/navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAllCategory = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="container">
        <Link className="all-nav" onClick={toggleAllCategory} href="#All">
          All Category
          <img className="h-8 w-8" src="chevron.svg" />
        </Link>
        {isOpen && (
          <div className="all-category-dropdown">
            <Link href="/category1" className="dropdown-link mt-2">
              Accessories
            </Link>
            <Link href="/category2" className="dropdown-link">
              Wears
            </Link>
            <Link href="/category3" className="dropdown-link mb-2">
              Games
            </Link>
            <Link href="/category3" className="dropdown-link mb-2">
              Toys
            </Link>
          </div>
        )}

        <Link href="/" className="nav-active nav-link scroll-easing">
          Home
        </Link>
        <Link href="/pages" className="nav-link  scroll-easing">
          Pages
        </Link>
        <Link href="/products" className="nav-link  scroll-easing">
          Products
        </Link>
        <Link href="/shop" className="nav-link  scroll-easing">
          Shop
        </Link>
        <Link
          href="/contact"
          className="contact-us scroll-easing items-center flex justify-center"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
