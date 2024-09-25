// import React from 'react'
import logo from "/rnr-logo.webp";
<<<<<<< HEAD
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className=" z-[100] w-full h-18 lg:flex hidden  lg:px-44    justify-between items-center">
      <div>
        <img src={logo} alt="logo" className=" w-36" />
      </div>

      <div className=" text-slate-800  uppercase text-[17px] font-bold flex gap-6">
        <Link to={"/"} className=" hover:text-[#f42222] duration-300">
          Home
        </Link>
        <Link to={"/services"} className=" hover:text-[#f42222] duration-300">
          Services
        </Link>
        <Link to={"/blog"} className=" hover:text-[#f42222] duration-300">
          Blogs
        </Link>
        <Link to={"/about"} className=" hover:text-[#f42222] duration-300">
          About Us
        </Link>
        <Link to={"/faq"} className=" hover:text-[#f42222] duration-300">
          FAQ
        </Link>
        <Link to={"/contacts"} className=" hover:text-[#f42222] duration-300">
          Contact
        </Link>
      </div>

      <div>
        <button className="bg-[#f42222] text-white text-[17px] py-1  px-[16px]">
=======

function Nav() {
  return (
    <div className=" w-full h-18 flex lg:px-44  bg-red-0  justify-between items-center">
      <div>
        <img src={logo} alt="logo" className=" w-36" />
      </div>
      <div className=" text-slate-800 uppercase text-[16px] font-bold flex gap-4">
        <h1>Home</h1>
        <h1>Services</h1>
        <h1>Blogs</h1>
        <h1>About Us</h1>
        <h1>FAQ</h1>
        <h1>Contact</h1>
      </div>
      <div>
        <button className="bg-[#f42222] text-white text-[17px] py-1  px-[20px]">
>>>>>>> 2dc1e0bde6a53859f1181b3e669d225fe8faf17b
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default Nav;
