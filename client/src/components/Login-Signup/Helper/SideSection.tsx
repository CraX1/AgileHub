import React, { useState, useEffect } from "react";
import agileImage from "../../../assets/boss-8595688_1280.png";

const SideSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sections = [
    {
      title: "Track Expenses",
      content:
        "Ditch the receipt chaos and let Expensify revolutionize your spending habits! Capture, categorize, and conquer your expenses with flair.",
    },
    {
      title: "Bill-Splitting Bliss!",
      content:
        "Dividing the dinner bill or splitting the grocery costs has never been easier! Say farewell to awkward calculations and messy disagreements. Our intuitive app effortlessly divides expenses among friends, family, or colleagues with just a few taps.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <div className="bg-agile_blue relative">
      <div
        className="my-16 bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${agileImage})`,
          width: "100%",
          height: "50%",
        }}
      />
      <div className="absolute inset-x-0 bottom-4 text-center">
        {sections.map((_, index) => (
          <span
            key={index}
            className={`inline-block mx-1 w-2 h-2 rounded-full cursor-pointer ${
              index === activeIndex ? "bg-white" : " bg-agile_gray"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div className="text-center text-white">
        <p className="text-3xl font-bold pt-4 pb-3">
          {sections[activeIndex].title}
        </p>
        <p className="text-md px-12">{sections[activeIndex].content}</p>
      </div>
    </div>
  );
};

export default React.memo(SideSection);
