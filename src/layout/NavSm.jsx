// import React from 'react'
// import React from 'react'

import logo from "/rnr-logo.webp";
import Sidebar from "./Sidebar";

function NavSm() {
  return (
    <div className=" w-full flex  lg:hidden bg-red-200  justify-between items-center">
      <div>
        <img src={logo} alt="logo" className=" w-36" />
      </div>

      <div>
        <button className="bg-[#f42222] text-white text-[17px] py-1  px-[10px]">
          BOOK NOW
        </button>
      </div>

      <Sidebar />
    </div>
  );
}

export default NavSm;
