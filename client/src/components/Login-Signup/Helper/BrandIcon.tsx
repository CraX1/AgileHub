import React from "react";
import ProjileIcon from "../../../assets/icon-svgs/ProjileIcon";

const BrandIcon = () => {
  return (
    <div className="flex gap-1.5 items-center">
      <ProjileIcon />
      <p className="font-bold text-4xl font-proj_brand_font">
        <span className=" text-proj_blue">Projile</span>
      </p>
    </div>
  );
};

export default React.memo(BrandIcon);
