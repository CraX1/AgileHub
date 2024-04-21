import React, { useState, useEffect } from "react";
import expImage from "../../../assets/boss-8595688_1280.png";

const SideSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sections = [
    {
      title: "Streamline Your Workflow",
      content:
        "Projile empowers you to streamline your workflow and stay on top of your projects. Effortlessly track progress, assign tasks, and collaborate seamlessly with your team, all in one intuitive platform.",
    },
    {
      title: "Agile Project Management",
      content:
        "Embrace agility and adapt to changing priorities with Projile's flexible project management tools. Easily manage sprints, organize your backlog, and deliver projects on time and within scope.",
    },
    {
      title: "Seamless Team Collaboration",
      content:
        "Harness the power of real-time collaboration with Projile. Share updates, exchange feedback, and ensure everyone is on the same page, no matter where they are. Seamless communication and transparency fuel your team's success.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <div className="bg-proj_blue relative">
      <div
        className="my-16 bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${expImage})`,
          width: "100%",
          height: "50%",
        }}
      />
      <div className="absolute inset-x-0 bottom-4 text-center">
        {sections.map((_, index) => (
          <span
            key={index}
            className={`inline-block mx-1 w-2 h-2 rounded-full cursor-pointer ${
              index === activeIndex ? "bg-white" : " bg-proj_gray"
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
