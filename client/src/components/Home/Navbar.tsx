import { NavLink } from "react-router-dom";
import BugIcon from "../../assets/icon-svgs/BugIcon";
import ChatIcon from "../../assets/icon-svgs/ChatIcon";
import DashboardIcon from "../../assets/icon-svgs/DashboardIcon";
import ProfileIcon from "../../assets/icon-svgs/ProfileIcon";
import ProjectIcon from "../../assets/icon-svgs/ProjectIcon";
import TeamIcon from "../../assets/icon-svgs/TeamIcon";
import BrandIcon from "../Login-Signup/Helper/BrandIcon";
import React from "react";

const Navbar = () => {
  const navItems = [
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
    {
      title: "Team Overview",
      icon: <TeamIcon />,
      path: "/team-overview",
    },
    {
      title: "Projects",
      icon: <ProjectIcon />,
      path: "/projects",
    },
    {
      title: "Chat",
      icon: <ChatIcon />,
      path: "chat",
    },
    {
      title: "Issues",
      icon: <BugIcon />,
      path: "/issues",
    },
    {
      title: "Profile",
      icon: <ProfileIcon />,
      path: "/profile",
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="flex flex-col min-w-64 gap-8 py-5 px-4 bg-proj_blue">
        <div className="pl-3 pt-2">
          <BrandIcon isDarkBg={true} iconSize="34" fontSize="3xl" />
        </div>
        <div className="flex flex-col gap-2.5">
          {navItems.map((item: any) => (
            <NavLink
              to={item.path}
              key={item.path}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-4 py-3 rounded-md text-proj_gray-light cursor-pointer ${
                  isActive ? "bg-proj_blue-active text-white" : ""
                } hover:text-white transition-all`
              }
            >
              <div>{item.icon}</div>
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
