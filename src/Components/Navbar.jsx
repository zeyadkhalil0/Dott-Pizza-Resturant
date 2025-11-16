import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimesCircle, FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder, MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center md:px-16 px-8 py-4 font-semibold cursor-pointer z-50 transition-all duration-300 ${
          isOpen || scrolled
            ? "bg-orange-200 text-gray-900 font-semibold shadow-lg"
            : "bg-transparent text-white"
        }`}
      >
        <Link to="/" className="logo">
          Dott Pizza
        </Link>

        <ul className="md:flex space-x-4 hidden">
          <li>
            <Link
              to="/"
              className={`px-4 py-2   rounded transition-all ${
                isActive("/") ? "bg-orange-500 text-white" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <a href="#items" className="px-4 py-2 rounded transition-all">
              Items
            </a>
            
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=201148819479&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded"
            >
              Order Now
            </a>
          </li>
          <li>
            <Link
              to="/about"
              className={`px-4 py-2 rounded transition-all ${
                isActive("/about") ? "bg-orange-500 text-white" : ""
              }`}
            >
              About Us
            </Link>
          </li>
        </ul>

        <div className="icons text-xl space-x-4 md:flex hidden">
          <FaShoppingCart />
          <MdAccountCircle />
          <MdFavoriteBorder />
        </div>

        <div
          className="Hamburger-Menu md:hidden text-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimesCircle /> : <FaBars />}
        </div>
      </nav>

      {isOpen && (
        <ul className="fixed inset-0 top-12 flex flex-col items-center h-48 bg-orange-200 text-gray-900 font-semibold space-y-4 py-6 cursor-pointer md:hidden z-40">
          <li>
            <Link
              to="/"
              className={`px-4 py-2 rounded transition-all ${
                isActive("/") ? "bg-orange-500 text-white" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <a href="#items" className="px-4 py-2 rounded transition-all">
              Items
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=201148819479&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded"
            >
              Order Now
            </a>
          </li>
          <li>
            <Link
              to="/about"
              className={`px-4 py-2 rounded transition-all ${
                isActive("/about") ? "bg-orange-500 text-white" : ""
              }`}
            >
              About Us
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
