import Accordion from "../../components/Accordion/Accordion.jsx";
import FaqBanner from "./FaqBanner.jsx";

function FAQ() {
  const accordionData = [
    // {
    //   question:
    //     "  How much time does it take for the complete two-wheeler service at the   doorstep",
    //   answer:
    //     " It usually takes 90-120 mins for the complete service. In case of   spare replacement or any major issue it can go beyond the mentioned   time.",
    // },
    // {
    //   question:
    //     "  How much time does it take for the complete two-wheeler service at the   doorstep",
    //   answer:
    //     " It usually takes 90-120 mins for the complete service. In case of   spare replacement or any major issue it can go beyond the mentioned   time.",
    // },
    // {
    //   question:
    //     "  How much time does it take for the complete two-wheeler service at the   doorstep",
    //   answer:
    //     " It usually takes 90-120 mins for the complete service. In case of   spare replacement or any major issue it can go beyond the mentioned   time.",
    // },
    // {
    //   question:
    //     "  How much time does it take for the complete two-wheeler service at the   doorstep",
    //   answer:
    //     " It usually takes 90-120 mins for the complete service. In case of   spare replacement or any major issue it can go beyond the mentioned   time.",
    // },
    // {
    //   question:
    //     "  How much time does it take for the complete two-wheeler service at the   doorstep",
    //   answer:
    //     " It usually takes 90-120 mins for the complete service. In case of   spare replacement or any major issue it can go beyond the mentioned   time.",
    // },
    // {
    //   question:
    //     "  How much time does it take for the complete two-wheeler service at the   doorstep",
    //   answer:
    //     " It usually takes 90-120 mins for the complete service. In case of   spare replacement or any major issue it can go beyond the mentioned   time.",
    // },
    {
      question:
        "  How much time does it take for the complete two-wheeler service at the   doorstep",
      answer:
        " It usually takes 90-120 mins for the complete service. In case of   spare replacement or any major issue it can go beyond the mentioned   time.",
    },
    {
      question:
        "  How much time does it take for the complete two-wheeler service at the   doorstep",
      answer:
        " It usually takes 90-120 mins for the complete service. In case of   spare replacement or any major issue it can go beyond the mentioned   time.",
    },
  ];
  return (
    <>
      <FaqBanner />

      <div className="flex lg:flex-row flex-col gap-8 lg:px-48 w-full mt-20">
        <div className="w-4/6  h-screen flex flex-col item-center gap-8 ">
          {accordionData.map(
            (item, idx) =>
              idx < 4 && <Accordion item={item} key={idx + "ASd"} />
          )}
        </div>
        <div className="w-4/6 h-screen flex flex-col item-center gap-8 ">
          {accordionData.map(
            (item, idx) =>
              idx < 4 && <Accordion item={item} key={idx + "ASd"} />
          )}
        </div>
      </div>
    </>
  );
}

export default FAQ;
