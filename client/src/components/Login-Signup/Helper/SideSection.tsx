import React from "react";
import agileImage from "../../../assets/boss-8595688_1280.png";

const SideSection = () => {
  return (
    <div className="bg-agile_blue">
      <div
        className=" my-16 bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${agileImage})`,
          width: "100%",
          height: "50%",
        }}
      ></div>
      <p className="text-center text-3xl font-bold text-white pt-4 pb-3">
        Track Progress
      </p>
      <p className="text-center text-md px-12 text-white">
        Plan, track, and execute your projects with ease. Break down tasks, set
        priorities, and keep your team aligned towards your project goals.
      </p>
    </div>
  );
};

export default React.memo(SideSection);
