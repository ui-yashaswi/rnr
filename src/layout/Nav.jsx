// import React from 'react'
import logo from "/rnr-logo.webp";
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
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default Nav;
