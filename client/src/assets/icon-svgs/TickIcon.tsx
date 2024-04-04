import React from "react";

const TickIcon = ({ isCompleted }: { isCompleted?: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="16"
      height="16"
      viewBox="0 0 40 40"
    >
      <path
        fill={isCompleted ? "#4ac100" : "#ffffff7d"}
        d="M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z"
      />
      <path
        fill={isCompleted ? "#4ac100" : "#ffffff7d"}
        d="M20,2c9.9,0,18,8.1,18,18s-8.1,18-18,18S2,29.9,2,20S10.1,2,20,2 M20,1C9.5,1,1,9.5,1,20s8.5,19,19,19	s19-8.5,19-19S30.5,1,20,1L20,1z"
      />
      <path
        fill="none"
        stroke={isCompleted ? "#fff" : "#ffffff9d"}
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M11.2,20.1l5.8,5.8l13.2-13.2"
      />
    </svg>
  );
};

export default React.memo(TickIcon);
