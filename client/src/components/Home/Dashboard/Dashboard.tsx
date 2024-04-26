import ProgressBoard from "./ProgressBoard";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen overflow-auto">
      <div className="flex justify-between m-6">
        <p className="text-lg font-semibold text-proj_black">Kanban Board</p>
        <div className="flex gap-1 items-center text-proj_gray-dark">
          <span>Apps</span>
          <span className="text-xs">{`>`}</span>
          <span className="italic">Kanban Board</span>
        </div>
      </div>

      <div className="flex gap-8 flex-col bg-white m-6 p-6 rounded border border-proj_gray-lightBorder shadow-proj_box_shadow">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-proj_black text-lg">
                Projile Dashboard
              </p>
              <p className=" text-proj_gray-dark">
                Gain a bird's-eye view of all your ongoing projects, their
                statuses, timelines, and key milestones.
              </p>
            </div>
            <div className="w-fit flex items-center gap-1 bg-proj_blue-sky px-3 py-1 text-white rounded-md cursor-pointer">
              <span className="pb-1 text-lg">+</span>
              <span className="text-sm">Add New Board</span>
            </div>
          </div>
          <div>
            <p>Members:-</p>
          </div>
        </div>
        <div className="flex gap-6 overflow-auto overflow-y-auto container container-scrollVisible">
          <ProgressBoard />
          <ProgressBoard />
          <ProgressBoard />
          <ProgressBoard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
