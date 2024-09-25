// import React from 'react'

import ContactBanner from "./ContactBanner";
import ContactCards from "./ContactCards";
import Map from "./Map";
import Form from "./Form";

function Contacts() {
  return (
    <div>
      <ContactBanner />
      <ContactCards />
      <div className=" w-full h-[450px]">
        <Map />
      </div>
      <Form />
    </div>
  );
}

export default Contacts;
