import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, cartEffect } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Reusable Icon Components
  const CartIcon = () => (
    <Link
      to="/cart"
      className="flex items-center space-x-2 relative group"
      onClick={closeMenu}
    >
      <div className="relative">
        {/* Cart Counter */}
        <span className="absolute -top-2 -right-2 bg-[#8C1D18] text-white rounded-full text-xs px-2 py-1">
          {cartItems.length}
        </span>

        {/* Cart Icon */}
        <svg
          className={`w-6 h-6 text-[#8C1D18] group-hover:text-[#FFD700] transition-colors duration-300 ${
            cartEffect ? "animate-bounce" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <span className="text-[#8C1D18] group-hover:text-[#FFD700] transition-colors duration-300">
        Cart
      </span>
    </Link>
  );

  const UserIcon = () => (
    <Link
      to="/user"
      className="flex items-center space-x-2 group"
      onClick={closeMenu}
    >
      <svg
        className="w-6 h-6 text-[#8C1D18] group-hover:text-[#FFD700] transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.121 17.804A10.97 10.97 0 0112 15c2.485 0 4.77.81 6.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0zM12 2a10 10 0 100 20 10 10 0 000-20z"
        ></path>
      </svg>
      <span className="text-[#8C1D18] group-hover:text-[#FFD700] transition-colors duration-300">
        User
      </span>
    </Link>
  );

  return (
    <nav className="bg-[#f1ca81] p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Logo */}
      <div className="text-[#8C1D18] text-3xl font-bold italic font-cursive cursor-pointer hover:text-[#FFD700] transition-colors duration-300">
        Dhaka Delights
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 items-center">
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-[#8C1D18] hover:text-[#FFD700] text-xl font-medium transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="text-[#8C1D18] hover:text-[#FFD700] text-xl font-medium transition-colors duration-300"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-[#8C1D18] hover:text-[#FFD700] text-xl font-medium transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-[#8C1D18] hover:text-[#FFD700] text-xl font-medium transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-6">
          <CartIcon />
          <UserIcon />
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-[#8C1D18] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#f1ca81] bg-opacity-95 z-50">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-[#8C1D18] focus:outline-none"
              aria-label="Close Menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-8 py-8">
            <li>
              <Link
                to="/"
                className="text-white text-2xl font-medium hover:text-[#FFD700] transition-colors duration-300"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="text-white text-2xl font-medium hover:text-[#FFD700] transition-colors duration-300"
                onClick={closeMenu}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white text-2xl font-medium hover:text-[#FFD700] transition-colors duration-300"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white text-2xl font-medium hover:text-[#FFD700] transition-colors duration-300"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="mt-8 text-white">
              <div className="flex items-center space-x-8">
                <CartIcon />
                <UserIcon />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
