import React from "react";
import "../../organism/Redmi/RedmiPhoneList.css";

const GoodsDiskon = (props) => {
  const { Diskon } = props;
  return <div className="site-goods__diskon">{Diskon}%</div>;
};

export default GoodsDiskon;
