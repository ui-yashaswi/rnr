// import React from 'react'
import btn1 from "/btn-1.webp";
import btn2 from "/btn-2.webp";
import { TbSlashes } from "react-icons/tb";

function AboutUs() {
  return (
    <div className="flex justify-center flex-col gap-14 py-16 items-center px-44">
      <div className=" flex justify-center items-center gap-2">
        <h1 className=" lg:text-5xl font-bold ">DOWNLOAD OUR APP</h1>
        <TbSlashes className="text-[#f42222] text-5xl font-bold" />
      </div>
      <div className="flex justify-center gap-80">
        <img src={btn1} className="w-52" alt="" />
        <img src={btn2} className="w-52" alt="" />
      </div>

      <div className="flex justify-between mt-20 items-center">
        <div className="flex flex-col gap-5">
          <div className=" flex justify-center items-center gap-2">
            <h1 className=" lg:text-5xl font-bold ">ABOUT US</h1>
            <TbSlashes className="text-[#f42222] text-5xl font-bold" />
          </div>

          <div className=" flex flex-col gap-10">
            <h1 className="text-[#f42222] font-bold text-xl ">
              WE ARE A COMPANY OF TALENTED ENGINEERS & MECHANICS
            </h1>
            <h1 className="text-[#777777] text-lg bg-red-500">
              Welcome to our data-powered company, revolutionizing the
              two-wheeler industry! At our doorstep, you'll find expert
              mechanics ready to deliver premium car and bike services right
              here . Whether it's your trusty two-wheeler or your family's
              four-wheeled companion, we've got you covered.
            </h1>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AboutUs;
