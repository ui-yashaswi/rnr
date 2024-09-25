// import React from 'react'
// import btn1 from "/btn-1.webp";
// import btn2 from "/btn-2.webp";
// import { TbSlashes } from "react-icons/tb";
// import abtImg from "/abt-img1.webp";
import AboutBanner from "./AboutBanner";
import Clients from "./Clients";
// import banner from "/abtUsBanner.webp";
// import { MdOutlineHome } from "react-icons/md";
// import { RxSlash } from "react-icons/rx";
import ClientsSm from "./ClientsSm";

function AboutUs() {
  return (
    <>
      <AboutBanner />

      <Clients />
      <ClientsSm />
    </>
  );
}

export default AboutUs;
