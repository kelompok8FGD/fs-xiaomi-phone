import React from "react";
import "../../organism/Redmi/RedmiPhoneList.css";

const GoodsInfo = (props) => {
  const {
    ProductTitle = "Redmi Note 11",
    ProductSubtitle,
    PPbefore = "2.599.000",
    PPafter = "1.999.000",
  } = props;
  return (
    <div className="site-goods__info">
      <div className="site-goods__title">{ProductTitle}</div>
      <div className="site-goods__subtitle">{ProductSubtitle}</div>
      <div className="site-goods__price">
        <span>Mulai dari </span>
        <strong>
          <small>Rp </small>
          {PPafter}
        </strong>
        <del>Rp {PPbefore}</del>
      </div>
    </div>
  );
};

export default GoodsInfo;
