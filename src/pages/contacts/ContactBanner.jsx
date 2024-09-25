// import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import { RxSlash } from "react-icons/rx";
import { TbSlashes } from "react-icons/tb";
import banner from "/contactUsBanner.avif";
import { Link } from "react-router-dom";

function ContactBanner() {
  return (
    <div>
      <div className="w-full lg:h-[65vh] h-[55vh] relative">
        <Link to={"/"}>
          <img
            src={banner}
            alt=""
            className=" w-full h-[65vh] object-cover bg-center relative"
          />
        </Link>
        <div className=" w-full lg:h-[65vh] h-[65vh] bg-black opacity-70 absolute top-0 left-0"></div>

        {/* text on overlay */}

        <div className=" w-full h-[65vh] flex flex-col gap-3 justify-center absolute  top-0 left-0">
          <div className="flex justify-center items-center lg:gap-4">
            <TbSlashes className="text-[#f42222] text-6xl font-bold" />
            <h1 className="lg:text-7xl font-bold text-white text-3xl">
              CONTACT US
            </h1>
            <TbSlashes className="text-[#f42222] text-6xl font-bold" />
          </div>

          <div className="flex justify-center gap-2 items-center">
            <MdOutlineHome className="text-[#f42222] text-xl" />
            <h1 className="text-[#f42222] text-lg font-medium">Home</h1>
            <RxSlash className="text-md text-slate-500" />
            <h1 className="text-white text-lg font-medium">Contact Us</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
