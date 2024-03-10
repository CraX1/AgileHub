import React from "react";
import brandIcon from "../../../assets/write.png";

const BrandIcon = () => {
  return (
    <div className="flex items-center">
      <img src={brandIcon} width={40} className="object-contain" alt="" />
      <p className="text-2xl font-bold">
        <span className=" text-agile_blue ">AgileHub</span>
      </p>
    </div>
  );
};

export default React.memo(BrandIcon);
