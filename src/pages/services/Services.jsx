// import React from "react";
import { TbSlashes } from "react-icons/tb";
import { MdOutlineHome } from "react-icons/md";
import { RxSlash } from "react-icons/rx";
import { Dropdown } from "flowbite-react";
import Ratings from "./Ratings";

// Ensure Flowbite styles are imported in your main entry file
import "flowbite/dist/flowbite.css";

function Services() {
  return (
    <div>
      <div className="w-full h-full flex flex-col justify-center lg:px-44 py-5 bg-[#171a1e]">
        <div className="flex flex-col gap-3 justify-center">
          <div className="flex justify-center items-center lg:gap-4">
            <TbSlashes className="text-[#f42222] text-6xl font-bold" />
            <h1 className="lg:text-7xl font-bold text-white text-4xl">
              SERVICES
            </h1>
            <TbSlashes className="text-[#f42222] text-6xl font-bold" />
          </div>

          <div className="flex flex-col items-center lg:gap-8 justify-center">
            <div className="flex justify-center gap-2 items-center">
              <MdOutlineHome className="text-[#f42222] text-xl" />
              <h1 className="text-[#f42222] text-lg">Home</h1>
              <RxSlash className="text-md text-slate-500" />
              <h1 className="text-white text-lg font-medium">Services</h1>
            </div>

            <h1 className="text-white font-bold text-[34px]">
              Choose Your Vehicle
            </h1>
          </div>
        </div>

        <div className="flex lg:justify-start justify-center lg:items-start items-center gap-2 bg-gren-500 lg:py-32  h-32  flex-col  ">
          <div className="flex justify-start  items-center  ">
            <button className="bg-white text-black text-[25px] py-3 font-semibold px-[20px]">
              Car
            </button>
            <button className="bg-[#f42222] text-white text-[25px] py-3 font-semibold px-[20px]">
              Bike
            </button>
          </div>

          <div className="relative">
            <Dropdown
              label="Select Brand"
              className="font-medium bg-white text-black " // Ensure text is black and background is white
              dismissOnClick={false}
            >
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>

      <Ratings />
    </div>
  );
}

export default Services;
