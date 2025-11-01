import React, { useState } from "react";
import { FaBars, FaTimesCircle, FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder, MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="md:absolute fixed bg-orange-300 text-white w-full flex justify-between items-center md:px-16 px-8  py-4 font-semibold cursor-pointer z-50">
        <div className="logo">Dott Pizza</div>
        <ul className="md:flex space-x-8 hidden">
          <li>Home</li>
          <li>Products</li>
          <li>Order Now</li>
          <li>About US</li>
        </ul>
        <div className="icons text-xl text-white space-x-4 md:flex hidden">
          {<FaShoppingCart />}
          {<MdAccountCircle />}
          {<MdFavoriteBorder/>}
        </div>
        {/* NavMobile */}
        <div
          className="Hamburger-Menu md:hidden text-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimesCircle /> : <FaBars />}
        </div>
      </nav>
      {isOpen && (
        <ul className="fixed inset-0 top-10 flex flex-col items-center h-48 bg-orange-300 text-black font-semibold space-y-4 bg- py-6 cursor-pointer md:hidden z-50">
          <li>Home</li>
          <li>Products</li>
          <li>About US</li>
          <li>Contact US</li>
        </ul>
        
      )}
    </>
  );
};

export default Navbar;
