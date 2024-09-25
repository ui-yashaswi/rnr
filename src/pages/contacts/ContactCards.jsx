// import React from 'react'
import { TbSlashes } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineContacts } from "react-icons/ai";
import { SlGlobe } from "react-icons/sl";
import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";
import { GrLinkedinOption } from "react-icons/gr";
import { TfiYoutube } from "react-icons/tfi";

function ContactCards() {
  return (
    <div className=" w-full h-full flex flex-col lg:px-44 px-3  ">
      <h1 className="text-[#f42222] font-bold text-lg lg:text-xl pt-10  text-nowrap ">
        CONTACT INFO
      </h1>

      <div className="flex justify-center items-center lg:gap-4">
        <h1 className="lg:text-5xl font-bold  text-xl">CONTACT US</h1>
        <TbSlashes className="text-[#f42222] text-6xl font-bold" />
      </div>

      <div className=" w-full h-full justify-center flex lg:flex-row flex-col gap-8 pt-10 pb-20">
        <div className=" w-full h-full flex flex-col gap-5">
          <div className=" flex gap-3 items-center">
            <GrMapLocation className="text-[#f42222] text-3xl" />
            <h1 className="text-slate-800 uppercase text-[20px] font-bold flex gap-6">
              LOCATION
            </h1>
          </div>

          <div className="bg-gray-200 h-[1px] w-80"></div>

          <button className="bg-[#f42222] text-white w-40 text-[17px] py-2  px-[16px]">
            CITIES WE SERVE
          </button>
        </div>

        <div className=" w-full h-full flex flex-col  gap-5">
          <div className=" flex gap-3 items-center">
            <AiOutlineContacts className="text-[#f42222] text-3xl" />
            <h1 className="text-slate-800 uppercase text-[20px] font-bold flex gap-6">
              EMAIL & PHONE SUPPORT
            </h1>
          </div>

          <div className="bg-gray-200 h-[1px] w-80"></div>

          <div className="flex flex-col gap-5">
            <h1 className="text-gray-500 text-[17px]">info@ridenrepair.com</h1>
            <h1 className=" text-[#f42222] text-[17px]">9200732962</h1>
          </div>
        </div>

        <div className=" w-full h-full flex flex-col gap-5">
          <div className=" flex gap-3 items-center">
            <SlGlobe className="text-[#f42222] text-3xl" />
            <h1 className="text-slate-800 uppercase text-[20px] font-bold flex gap-6">
              FOLLOW US
            </h1>
          </div>

          <div className="bg-gray-200 h-[1px] w-80"></div>

          <div className=" flex  gap-1">
            <div className="h-10 w-10 flex justify-center items-center text-white bg-[#f42222] p-2">
              <ImFacebook />
            </div>
            <div className="h-10 w-10 flex justify-center items-center text-white bg-[#f42222] p-2">
              <IoLogoInstagram />
            </div>
            <div className="h-10 w-10 flex justify-center items-center text-white bg-[#f42222] p-2">
              <GrLinkedinOption />
            </div>
            <div className="h-10 w-10 flex justify-center items-center text-white bg-[#f42222] p-2">
              <TfiYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;
