import { ArrowDownwardSharp, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./featuredinfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMonyRate">
            -11.4 <ArrowDownwardSharp className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared To Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMonyRate">
            -3.4 <ArrowDownwardSharp className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared To Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMonyRate">
            +1.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared To Last Month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
