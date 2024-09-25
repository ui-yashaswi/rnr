// import React from 'react'
import homeBg from "/home-bg.webp";
<<<<<<< HEAD

import Ratings from "../services/Ratings";
import Clients from "../About/Clients";
import ClientsSm from "../About/ClientsSm";
=======
import AboutUs from "./AboutUs";
>>>>>>> 2dc1e0bde6a53859f1181b3e669d225fe8faf17b

function Home() {
  return (
    <div>
      <img
        src={homeBg}
        alt=""
<<<<<<< HEAD
        className="w-full lg:h-screen h-[65vh] bg-blue-300  relative object-cover bg-center"
      />
      {/* <div className=" absolute bg-gray-900 opacity-5 w-full  lg:h-screen  h-[65vh]  top-0 left-0 "></div> */}

      <Ratings />
      <Clients />
      <ClientsSm />
=======
        className="w-full h-screen bg-blue-300  relative "
      />
      <div className=" absolute bg-gray-900 opacity-5 w-full  h-screen   top-0 left-0 "></div>
      <AboutUs />
>>>>>>> 2dc1e0bde6a53859f1181b3e669d225fe8faf17b
    </div>
  );
}

export default Home;
