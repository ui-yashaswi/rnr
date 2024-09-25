// import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import { RxSlash } from "react-icons/rx";
import { TbSlashes } from "react-icons/tb";
import banner from "/abtUsBanner.webp";
import btn1 from "/btn-1.webp";
import abtImg from "/abt-img1.webp";
import btn2 from "/btn-2.webp";

// import ClientsSm from "./ClientsSm";

function AboutBanner() {
  return (
    <div>
      <div className="w-full h-[65vh] relative ">
        <img
          src={banner}
          alt=""
          className=" w-full h-[65vh] object-cover bg-center relative"
        />
        <div className="  w-full lg:h-[65vh] h-[65vh] bg-black opacity-70 absolute top-0 left-0"></div>

        {/* text on overlay */}

        <div className=" w-full h-[65vh] flex flex-col gap-3 justify-center absolute  top-0 left-0">
          <div className="flex justify-center items-center lg:gap-4">
            <TbSlashes className="text-[#f42222] text-6xl font-bold" />
            <h1 className="lg:text-6xl font-bold text-white text-xl">
              ABOUT US
            </h1>
            <TbSlashes className="text-[#f42222] text-6xl font-bold" />
          </div>

          <div className="flex justify-center gap-2 items-center">
            <MdOutlineHome className="text-[#f42222] text-xl" />
            <h1 className="text-[#f42222] text-lg font-medium">Home</h1>
            <RxSlash className="text-md text-slate-500" />
            <h1 className="text-white text-lg font-medium">About Us</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col gap-14 lg:py-16 py-5 items-center lg:px-44 px-3   w-full h-full">
        <div className=" flex justify-center items-center lg:gap-2 ">
          <h1 className=" lg:text-5xl text-3xl font-bold ">DOWNLOAD OUR APP</h1>
          <TbSlashes className="text-[#f42222] lg:text-5xl text-3xl font-bold" />
        </div>
        <div className="flex lg:flex-row flex-col justify-center gap-7 lg:gap-80">
          <img src={btn1} className="w-52" alt="" />
          <img src={btn2} className="w-52" alt="" />
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-10 lg:mt-20 mt-8 items-center ">
          {/* left */}

          <div className=" flex flex-col gap-6 w-full   lg:py-5">
            <div className=" flex justify-center items-center gap-2 ">
              <h1 className=" lg:text-5xl text-3xl font-bold ">ABOUT US</h1>
              <TbSlashes className="text-[#f42222] lg:text-5xl text-3xl font-bold" />
            </div>

            <div className=" flex w-full flex-col gap-6">
              <h1 className="text-[#f42222] font-bold text-lg lg:text-xl ">
                WE ARE A COMPANY OF TALENTED ENGINEERS & MECHANICS
              </h1>
              <h1 className="text-[#777777] lg:text-[16.5px] text-[14.5px] font-serif font-medium ">
                Welcome to our data-powered company, revolutionizing the
                two-wheeler industry! At our doorstep, you ll find expert
                mechanics ready to deliver premium car and bike services right
                here . Whether it s your trusty two-wheeler or your family s
                four-wheeled companion, we ve got you covered.
              </h1>

              <h1 className="text-[#777777] lg:text-[16.5px] text-[14.5px] font-serif font-medium ">
                Our mission is simple: to provide you with hassle-free,
                top-quality service whenever you need it. With our team of
                skilled mechanics, we re dedicated to bringing convenience and
                excellence to the car and bike service industry. Say goodbye to
                waiting rooms and long queues—we bring the service to you, right
                on time and with unmatched quality.
              </h1>
            </div>

            <div className="flex justify-start pt-4 item-center gap-5">
              <button className="bg-[#f42222] text-white text-[17px] py-1  px-[20px]">
                CONTACT US
              </button>
              <button className="border border-black text-black text-[17px] py-1  px-[20px]">
                BOOK NOW
              </button>
            </div>
          </div>

          {/* right */}

          <div className="lg:w-[70vw] overflow-hidden">
            <img
              src={abtImg}
              className="lg:w-[70vw] transition-transform duration-300 hover:scale-110 border object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
