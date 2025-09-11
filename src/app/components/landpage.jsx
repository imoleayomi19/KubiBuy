"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { products, Product } from "@/app/data/products"; // 👈 Import from data file
import SlideBanner from "./slideBanner";
import Navbar from "./navbar";
import "../styles/header.css";

const CART_STORAGE_KEY = "shopping_cart";

const LandPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/login");
  };
  const handleSignupClick = () => {
    router.push("/signup");
  };

  // Add to cart handler
  const handleAddToCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { id: productId, quantity: 1 }];
      }
    });
  };
  // Show cart count for feedback
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <div className="header">
        <div className="row">
          <div className="flex-container">
            <div className="logo">
              <span>K</span>ubi<span>B</span>uy
            </div>

            <div className="flex">
              <div className="search-holder">
                <input type="text" placeholder="Search Products..." />
                <div className="search-btn">
                  <button className="cursor-pointer">
                    <img className="w-6 h-6" src="search.svg" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSignupClick}
                className="sign-btn text-base mr-4 font-bold cursor-pointer"
              >
                Sign up
              </button>

              <button onClick={handleLoginClick} className="log-btn">
                Log in
              </button>
              <div onClick={toggleCart} className="cart holder">
                <img className="w-10 h-10 cursor-pointer" src="cart.svg" />
                <div className="counter">
                  <span className="font-bold">{cartItemCount}</span>
                </div>
              </div>
              {isOpen && (
                <div className="cart-items bg-gray-100 rounded-lg">
                  <h2 className="cart-head p-2 bg-purple-100 rounded-lg inline-block">
                    🛒 Your Cart
                  </h2>
                  {cart.length === 0 ? (
                    <div className="empty-cart flex flex-col m-auto">
                      <img
                        className="w-60 h-60"
                        src="/images/empty.JPG"
                        alt=""
                      />
                      <h1>
                        Your Cart is <span className="coll"> Empty!</span>
                      </h1>
                      <i>
                        <marquee direction="left">
                          Oops! Your cart is empty! Discover our favorite wears,
                          toys, games, and more!
                        </marquee>
                      </i>
                      <button className="go-shop-btn">Go Shopping</button>
                    </div>
                  ) : (
                    <>
                      <ul>
                        {cart.map((item) => {
                          const product = products.find(
                            (p) => p.id === item.id
                          );
                          return (
                            <li
                              key={item.id}
                              className="cart-list flex items-center mb-2"
                            >
                              {/* Image section */}
                              <img
                                src={product?.image}
                                alt={product?.name}
                                className="cart-item-img"
                                style={{
                                  width: "48px",
                                  height: "48px",
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                  marginRight: "12px",
                                  border: "1px solid #eee",
                                  background: "#fafafa",
                                }}
                              />
                              <span className="flex-1 item-details">
                                {product?.name} x {item.quantity} — $
                                {product
                                  ? (product.price * item.quantity).toFixed(2)
                                  : "N/A"}
                              </span>
                              <button
                                className="sub-btn ml-2"
                                onClick={() => {
                                  setCart((prevCart) =>
                                    prevCart
                                      .map((cartItem) =>
                                        cartItem.id === item.id
                                          ? {
                                              ...cartItem,
                                              quantity: cartItem.quantity - 1,
                                            }
                                          : cartItem
                                      )
                                      .filter(
                                        (cartItem) => cartItem.quantity > 0
                                      )
                                  );
                                }}
                              >
                                −
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                      {/* Subtotal section */}
                      <div className="cart-subtotal">
                        <span>Total: </span>$
                        {cart
                          .reduce((sum, item) => {
                            const product = products.find(
                              (p) => p.id === item.id
                            );
                            return (
                              sum +
                              (product ? product.price * item.quantity : 0)
                            );
                          }, 0)
                          .toFixed(2)}
                      </div>
                      <div className=" flex justify-center">
                        <button className="pay-btn">Pay Now</button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <SlideBanner />
      <div className="min-h-screen bg-pink-50 p-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-600">
            🧸 Kids’ Shopping Store
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Fun, safe, and adorable items for your little ones!
          </p>
          {/* <div className="mt-4 p-3 bg-purple-100 rounded-lg inline-block">
            🛒 Cart Items: <span className="font-bold">{cartItemCount}</span>
          </div> */}
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm flex-1">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold text-green-600 mt-4">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="mt-4 py-2 px-4 cursor-pointer bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    ➕ Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandPage;
