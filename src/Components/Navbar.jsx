import React, { useState } from "react";
import { FaBars, FaTimesCircle, FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder, MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="md:absolute fixed text-white w-full flex justify-between items-center md:px-16 px-8  py-4 font-semibold cursor-pointer z-50">
        <div className="logo">Dott Pizza</div>
        <ul className="md:flex space-x-8 hidden">
          <li>Home</li>
          <li>Products</li>
          <li>About US</li>
          <li>Contact US</li>
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
        <ul className="flex flex-col items-center bg-orange-800 text-white space-y-4 bg- py-6 cursor-pointer md:hidden">
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
