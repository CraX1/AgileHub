import React from "react";
import brandIcon from "../../../assets/write.png";

const BrandIcon = () => {
  return (
    <div className="flex items-center">
      <img src={brandIcon} width={40} className="object-contain" alt="" />
      <p className="font-bold text-4xl font-agile_brand_font">
        <span className=" text-agile_blue">Expensify</span>
      </p>
    </div>
  );
};

export default React.memo(BrandIcon);
