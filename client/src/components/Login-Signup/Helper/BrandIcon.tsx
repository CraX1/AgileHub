import React from "react";
import ProjileIcon from "../../../assets/icon-svgs/ProjileIcon";

const BrandIcon = ({
  fontSize,
  iconSize,
  isDarkBg,
}: {
  fontSize?: string;
  iconSize?: string;
  isDarkBg?: boolean;
}) => {
  return (
    <div className="flex gap-1.5 items-center">
      <ProjileIcon isDarkBg={isDarkBg} iconSize={iconSize} />
      <span
        className={`font-bold${
          fontSize ? " text-" + fontSize : " text-4xl"
        } font-proj_brand_font font-extrabold ${
          isDarkBg ? "text-white" : "text-proj_blue"
        }`}
      >
        Projile
      </span>
    </div>
  );
};

export default React.memo(BrandIcon);
