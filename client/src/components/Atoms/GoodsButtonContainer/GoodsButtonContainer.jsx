import React from "react";
import "../../organism/Redmi/RedmiPhoneList.css";
import BtnBeliSekarang from "./BtnBeliSekarang/BtnBeliSekarang";
import BtnLearnMore from "./BtnLearnMore/BtnLearnMore";

const GoodsButtonContainer = (props) => {
  const { urlBS, urlLM } = props;
  return (
    <div className="site-goods__button-container">
      <BtnBeliSekarang url={urlBS} />
      <BtnLearnMore url={urlLM} />
    </div>
  );
};

export default GoodsButtonContainer;
