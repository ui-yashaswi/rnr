// import React from 'react'
<<<<<<< HEAD
import { IoCallOutline } from "react-icons/io5";

import { GoLocation } from "react-icons/go";
import btn1 from "/btn-1.webp";
import btn2 from "/btn-2.webp";

function Footer() {
  return (
    <div className=" w-full h-full flex  flex-col ">
      <div className=" w-full h-full flex lg:flex-row flex-col justify-center lg:items-center items-start py-14 gap-6 lg:gap-20 bg-[#f42222] lg:px-44 px-3">
        <div className="flex items-center gap-4 text-white  ">
          <GoLocation className="lg:text-7xl text-5xl font-extralight" />
          <h1 className="text-lg">CITIES WE SERVE</h1>
        </div>

        <div className="flex items-center gap-4 text-white  ">
          <GoLocation className="lg:text-7xl text-5xl font-extralight" />
          <h1 className="text-lg font-serif">info@ridenrepair.com</h1>
        </div>

        <div className="flex items-center gap-4 text-white  ">
          <IoCallOutline className="lg:text-7xl text-5xl font-extralight" />
          <h1 className="text-lg">9200732962</h1>
        </div>

        <div className="flex  flex-col justify-center gap-4">
          <img src={btn1} className="lg:w-56 w-78" alt="" />
          <img src={btn2} className="lg:w-56 w-78" alt="" />
        </div>
      </div>
      <div></div>
    </div>
  );
=======

function Footer() {
  return <div>Footer</div>;
>>>>>>> 2dc1e0bde6a53859f1181b3e669d225fe8faf17b
}

export default Footer;
