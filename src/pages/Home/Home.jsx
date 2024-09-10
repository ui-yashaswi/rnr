// import React from 'react'
import homeBg from "/home-bg.webp";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <div>
      <img
        src={homeBg}
        alt=""
        className="w-full h-screen bg-blue-300  relative "
      />
      <div className=" absolute bg-gray-900 opacity-5 w-full  h-screen   top-0 left-0 "></div>
      <AboutUs />
    </div>
  );
}

export default Home;
