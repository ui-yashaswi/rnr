// import React from 'react'
import { TbSlashes } from "react-icons/tb";
import servicesImg from "/services-img.webp";
function Ratings() {
  return (
    <div>
      <div className=" w-full h-full flex lg:flex-row flex-col lg:justify-start justify-center py-10 gap-10 px-3 lg:px-28  ">
        {/* left */}

        <div className="lg:w-[45vw] h-full overflow-hidden">
          <img
            src={servicesImg}
            className="lg:w-[45vw] transition-transform duration-300 hover:scale-110 border object-cover bg-center"
            alt=""
          />
        </div>

        {/* right */}

        <div className="flex flex-col gap-4 justify-center lg:w-[40vw]">
          <div className=" flex justify-center items-center gap-2">
            <h1 className=" lg:text-5xl text-3xl font-bold tracking-tight">
              WHY CHOOSE US
            </h1>
            <TbSlashes className="text-[#f42222] text-5xl font-bold" />
          </div>

          <h1 className="text-[#777777] lg:text-[16.5px] text-[14.5px] font-serif font-medium">
            We offer a full range of car and bike services at your doorstep .
            All services are performed by highly qualified mechanics. We also
            assign a committed service buddy during the time of service to
            ensure complete service satisfaction.
          </h1>

          {/* ratings */}

          <div className="flex flex-col gap-6 w-full lg:w-[35vw]   py-5 ">
            {/*  Rating Bar */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-black lg:text-lg font-bold uppercase">
                  Quality Services
                </span>
                <span className="text-black lg:text-lg font-bold">95%</span>
              </div>
              <div className="relative lg:w-[35vw] h-[5.5px] bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#f42222]"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>

            {/* React Rating Bar */}
            <div className="flex flex-col gap-2 lg:w-[35vw]">
              <div className="flex justify-between">
                <span className="text-black lg:text-lg font-bold uppercase">
                  Experienced Mechanics
                </span>
                <span className="text-black font-bold lg:text-lg">85%</span>
              </div>

              <div className="relative lg:w-[35vw] h-[5.5px] bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#f42222]"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            {/* CSS Rating Bar */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-black lg:text-lg font-bold uppercase">
                  On-Time Doorstep Bike Service
                </span>
                <span className="text-black font-bold lg:text-lg">95%</span>
              </div>
              <div className="relative lg:w-[35vw] h-[5.5px] bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#f42222]"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
