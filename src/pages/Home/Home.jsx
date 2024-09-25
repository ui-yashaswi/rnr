// import React from 'react'
import homeBg from "/home-bg.webp";

import Ratings from "../services/Ratings";
import Clients from "../About/Clients";
import ClientsSm from "../About/ClientsSm";

function Home() {
  return (
    <div>
      <img
        src={homeBg}
        alt=""
        className="w-full lg:h-screen h-[65vh] bg-blue-300  relative object-cover bg-center"
      />
      {/* <div className=" absolute bg-gray-900 opacity-5 w-full  lg:h-screen  h-[65vh]  top-0 left-0 "></div> */}

      <Ratings />
      <Clients />
      <ClientsSm />
    </div>
  );
}

export default Home;
