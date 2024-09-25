// import React from 'react'
import { TbSlashes } from "react-icons/tb";

function ClientsSm() {
  return (
    <div className="w-full h-[95vh] flex lg:hidden items-center mt-20  relative">
      <div
        className=" w-full h-[95vh]  bg-fixed bg-center  bg-cover relative "
        style={{ backgroundImage: `url('/clients.webp')` }}
      >
        <div className="lg:w-[59.3vw] w-full h-[95vh] bg-black opacity-50 absolute top-0 left-0"></div>
      </div>

      <div className=" w-[80vw] h-full flex-col absolute top-5  left-5 z-20 ">
        <div className="flex flex-col gap-2 justify-center items-start ">
          <h1 className="text-[#f42222] font-bold text-xl ">TESTIMONIAL</h1>
          <div className=" flex justify-center items-center lg:gap-2 ">
            <h1 className=" lg:text-5xl text-white text-3xl font-bold ">
              WHAT CLIENTS SAY
            </h1>
            <TbSlashes className="text-white lg:text-5xl text-3xl font-bold" />
          </div>
        </div>

        <div className="bg-[#f42222] w-[90vw] h-[65vh] mt-10 ">
          <h1 className="text-white italic text-[20px] p-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            aperiam! Explicabo ratione facilis voluptatibus delectus quod
            commodi sapiente? Laborum mollitia inventore quam voluptatum vel
            nobis, incidunt ea iure libero corporis ratione, eos maxime!l Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugiat?
          </h1>
          <h1 className=" text-white text-2xl italic text-end pr-6 ">
            -Saurabh Mehta
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ClientsSm;
