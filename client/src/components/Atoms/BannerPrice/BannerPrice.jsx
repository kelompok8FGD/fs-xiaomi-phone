import React from "react";
import "./BannerPrice.css";
// import "../../organism/Redmi/RedmiPhoneList.css";

const BannerPrice = (props) => {
  const { PriceAfter = "2.099.000", PriceBefore = "2.599.000" } = props;
  return (
    <div className="site-banner__price">
      <span>Mulai dari </span>
      <strong>
        <small>Rp </small>
        {PriceAfter}
      </strong>
      <del>Rp {PriceBefore}</del>
    </div>
  );
};

export default BannerPrice;
