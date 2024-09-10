// import React from 'react'
import logo from "/rnr-logo.webp";

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
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default Nav;
