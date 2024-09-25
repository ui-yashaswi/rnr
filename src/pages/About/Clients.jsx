import { TbSlashes } from "react-icons/tb";

function Clients() {
  return (
    <div className="w-full h-full lg:flex hidden items-center  relative">
      {/* right */}
      <div
        className="lg:w-[60vw] w-full lg:h-[85vh]  bg-fixed bg-center  bg-cover relative "
        style={{ backgroundImage: `url('/clients.webp')` }}
      >
        <div className="lg:w-[59.3vw] w-full h-[85vh] bg-black opacity-50 absolute top-0 left-0"></div>
      </div>

      {/* left*/}
      <div className="lg:w-[40vw] lg:flex hidden bg-red-00 h-[85vh] ">
        <img
          src="/clients2.png"
          alt="Clients Image"
          className=" w-full h-full object-cover bg-center"
        />
      </div>

      {/* cards nd text */}

      <div className=" w-full h-full flex-col absolute top-0 left-0 z-20 lg:pt-10">
        <div className="flex flex-col gap-2 justify-center items-start lg:px-44">
          <h1 className="text-[#f42222] font-bold text-xl ">TESTIMONIAL</h1>
          <div className=" flex justify-center items-center lg:gap-2 ">
            <h1 className=" lg:text-5xl text-white text-3xl font-bold ">
              WHAT CLIENTS SAY
            </h1>
            <TbSlashes className="text-white lg:text-5xl text-3xl font-bold" />
          </div>
        </div>

        <div className="w-full h-full flex lg:px-44 lg:pt-20 gap-8">
          <div className="bg-[#f42222] lg:w-[37vw] h-72 ">
            <h1 className="text-white italic text-[20px] p-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              aperiam! Explicabo ratione facilis voluptatibus delectus quod
              commodi sapiente? Laborum mollitia inventore quam voluptatum vel
              nobis, incidunt ea iure libero corporis ratione, eos maxime!l
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              fugiat?
            </h1>
            <h1 className=" text-white text-2xl italic text-end pr-6 ">
              -Saurabh Mehta
            </h1>
          </div>

          <div className="bg-[#f42222] lg:flex flex-col hidden lg:w-[37vw] h-52 ">
            <h1 className="text-white italic text-[20px] p-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              aperiam! Explicabo r Laborum mollitia ipsa atque enim nesciunt
              optio earum exercitationem inventore quam voluptatum vel nobis
            </h1>
            <h1 className=" text-white text-2xl italic text-end pr-6 ">
              -Aditi Singh
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
