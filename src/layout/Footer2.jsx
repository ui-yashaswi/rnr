// import React from "react";
import { TbSlashes } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Map from "../pages/contacts/Map";
function Footer2() {
  return (
    <div className=" w-full h-full lg:flex hidden  justify-between gap-10 lg:pl-44 lg:pr-10 items-start py-10 bg-[#171a1e] ">
      {/*----------------------[ company ]--------------*/}

      <div className="flex flex-col gap-4 items-start">
        <div className=" flex justify-center items-center gap-2 ">
          <h1 className=" lg:text-2xl font-semibold text-white ">COMPANY</h1>
          <TbSlashes className="text-[#f42222] text-3xl font-bold" />
        </div>

        <h1 className="text-[#878e9c]">
          Looking for specialized two-wheeler repair? Ride N Repair offers
          doorstep bike service with expert mechanics to meet and exceed your
          expectations.
        </h1>

        <div className="w-full flex justify-center border items-center gap-4 border-[#393d49] py-2 bg-[#1d2125]">
          <div className="text-white text-4xl h-18 flex justify-center items-center    w-18 border-white bg-[#f42222] rounded-full p-4">
            <FiPhoneCall />
          </div>
          <div className="flex flex-col">
            <h1 className=" font-medium text-gray-500">Talk To Our Support</h1>
            <h1 className="font-bold text-lg text-white">9200732962</h1>
          </div>
        </div>
      </div>

      {/*---------------------- [Our Solution]-------------- */}

      <div className=" flex flex-col gap-6  items-start">
        <div className=" flex justify-center items-center gap-2 ">
          <h1 className=" lg:text-2xl font-semibold text-white ">
            OUR SOLUTIONS
          </h1>
          <TbSlashes className="text-[#f42222] text-3xl font-bold" />
        </div>

        <div className=" flex justify-between gap-2">
          <Link to={"/services"} className=" text-[#878e9c] hover:text-white">
            Services
          </Link>
          <Link to={"/blog"} className=" text-[#878e9c] hover:text-white">
            Blogs
          </Link>
          <Link to={"/about"} className=" text-[#878e9c] hover:text-white">
            About Us
          </Link>
          <Link to={"/faq"} className=" text-[#878e9c] hover:text-white">
            FAQ
          </Link>
          <Link to={"/contacts"} className=" text-[#878e9c] hover:text-white">
            Contact
          </Link>
        </div>

        <div className=" flex justify-between gap-2">
          <Link
            to={"/terms&conditions"}
            className=" text-[#878e9c] hover:text-white"
          >
            Terms Condition
          </Link>
          <Link to={"/policy"} className=" text-[#878e9c] hover:text-white">
            Privacy Policy
          </Link>

          <Link
            to={"/cancellation"}
            className=" text-[#878e9c] hover:text-white"
          >
            Cancellation
          </Link>
          <Link to={"/about"} className=" text-[#878e9c] hover:text-white">
            About Us
          </Link>
          <Link to={"/refund"} className=" text-[#878e9c] hover:text-white">
            Refund
          </Link>
        </div>
      </div>

      {/*---------------------- [follow-us]-------------- */}

      <div className="flex flex-col justify-center items-center gap-4">
        <div className=" flex justify-center items-center gap-2 ">
          <h1 className=" lg:text-2xl font-semibold text-white ">FOLLOW US</h1>
          <TbSlashes className="text-[#f42222] text-3xl font-bold" />
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="text-[#f42222] bg-white rounded-full  text-3xl p-2 ">
            <FaFacebookF />
          </div>
          <div className="text-[#f42222] bg-white rounded-full  text-3xl p-2 ">
            <FaLinkedinIn />
          </div>
          <div className="text-[#f42222] bg-white rounded-full  text-3xl p-2 ">
            <IoLogoInstagram />
          </div>
          <div className="text-[#f42222] bg-white rounded-full  text-3xl p-2 ">
            <TfiYoutube />
          </div>
        </div>
      </div>

      <div className="w-[100vw] h-[40vh]">
        <Map />
      </div>
    </div>
  );
}

export default Footer2;
