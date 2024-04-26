import React from "react";
import TaskCard from "./TaskCard";

const ProgressBoard = () => {
  return (
    <div className="flex flex-col gap-4 min-w-96 min-h-[580px] max-h-0 overflow-hidden max-w-0 bg-proj_gray-secondary border border-proj_gray-lightBorder rounded">
      <div className="flex justify-between pt-5 px-5">
        <div className="flex gap-2 items-baseline text-proj_black font-semibold ">
          <p>Backlog</p>
          <span className=" bg-gray-200 text-xs rounded px-2 py-0.5">4</span>
        </div>
        <p>...</p>
      </div>
      <div className="flex flex-col gap-4 overflow-auto container px-5">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
      <div className="flex justify-center items-center gap-1 bg-proj_blue-sky bg-opacity-10 text-proj_blue-sky mx-5 mb-5 px-3 py-1 font-semibold rounded cursor-pointer">
        <span className="pb-1 text-lg">+</span>
        <span className="text-sm">Add New Task</span>
      </div>
    </div>
  );
};

export default ProgressBoard;
