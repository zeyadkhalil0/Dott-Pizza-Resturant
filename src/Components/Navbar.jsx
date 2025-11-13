import React, { useEffect, useState } from "react";
import { FaBars, FaTimesCircle, FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder, MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
   if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center md:px-16 px-8 py-4 font-semibold cursor-pointer z-50 transition-all duration-300 ${
          scrolled ? "bg-orange-200 text-gray-900 font-semibold shadow-lg" : "bg-transparent text-white"
        }`}
      >
        <div className="logo">Dott Pizza</div>

        <ul className="md:flex space-x-8 hidden">
          <li>Home</li>
          <li>Products</li>
          <li>Order Now</li>
          <li>About Us</li>
        </ul>

        <div className="icons text-xl space-x-4 md:flex hidden">
          <FaShoppingCart />
          <MdAccountCircle />
          <MdFavoriteBorder />
        </div>

        {/* Mobile Menu Button */}
        <div
          className="Hamburger-Menu md:hidden text-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimesCircle /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="fixed inset-0 top-12 flex flex-col items-center h-48 bg-orange-200 text-gray-900 font-semibold space-y-4 py-6 cursor-pointer md:hidden z-40">
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
