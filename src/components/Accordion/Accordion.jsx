import { useState, useEffect } from "react";
import { BsQuestionCircleFill } from "react-icons/bs"; // Importing the icon

const Accordion = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [iconSize, setIconSize] = useState(40); // Default icon size

  const updateIconSize = () => {
    if (window.innerWidth >= 1024) {
      setIconSize(open ? 80 : 60); // Sizes for large screens
    } else {
      setIconSize(open ? 40 : 30); // Sizes for small screens
    }
  };

  useEffect(() => {
    updateIconSize(); // Set initial size
    window.addEventListener("resize", updateIconSize); // Update on resize

    return () => {
      window.removeEventListener("resize", updateIconSize); // Cleanup
    };
  }, [open]); // Update size when 'open' state changes

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto cursor-pointer">
      <div
        className={`w-full flex text-xl items-start gap-4 justify-between ${
          open ? "bg-red-500 text-white h-full" : "bg-white text-slate-900"
        } lg:h-20 h-full border-4 p-4`} // Flex to align the text and icon
        onClick={() => setOpen(!open)}
      >
        {/* Icon beside the question */}
        <div>
          <BsQuestionCircleFill
            className={`transition-all duration-500 lg:ml-4 ${
              open ? "text-white" : "text-[#f42222]"
            }`}
            size={iconSize} // Use the responsive icon size
          />
        </div>

        {/* Question Text */}
        <div className="flex items-center">
          <span>{item.question}</span>
        </div>
      </div>

      {/* Answer */}
      <div
        className={`bg-slate-50 transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-[300px] p-4" : "max-h-0 p-0"
        } w-full`}
        style={{ transitionProperty: "max-height, padding" }} // Smooth transition for padding
      >
        {open && <p>{item.answer}</p>} {/* Conditional rendering of answer */}
      </div>
    </div>
  );
};

export default Accordion;
