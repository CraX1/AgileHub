import React from "react";
import ChatIcon from "../../../assets/icon-svgs/ChatIcon";

const TaskCard = () => {
  return (
    <div className="flex flex-col gap-4 border border-proj_gray-lightBorder bg-white p-4 rounded">
      <div className="flex justify-between">
        <p className=" text-proj_blue-sky font-semibold">#PM002</p>
        <span>{`...`}</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className=" flex flex-col gap-1">
          <p className=" text-proj_black font-semibold">Dashboard UI</p>
          <span className="text-sm text-proj_gray-dark text-nowrap overflow-ellipsis overflow-hidden">
            Creating Awesomw Dashboard UI kitdasdasdas daddadadasdadasd
          </span>
        </div>
        <div className="flex justify-between items-center text-xs font-semibold text-proj_gray-dark">
          <span className="">28/08/21</span>
          <div className="flex gap-5 items-center">
            <span>0/4</span>
            <p className="flex gap-1 items-center">
              <ChatIcon size="18" /> 0
            </p>
          </div>
        </div>
      </div>
      <div className=" width-full h-1 bg-proj_gray-secondary"></div>
      <div className="text-xs self-end bg-proj_blue-sky bg-opacity-10 w-fit text-proj_blue-sky font-semibold p-2 rounded-md">
        Web Design
      </div>
    </div>
  );
};

export default TaskCard;
