import React from "react";
import "./BannerButton.css";
import "../../organism/Redmi/RedmiPhoneList.css";
import BannerButtonBeliSekarang from "./BannerButtonBeliSekarang/BannerButtonBeliSekarang";
import BannerButtonLearnMore from "./BannerButtonLearnMore/BannerButtonLearnMore";

const BannerButton = (props) => {
  const { urlBeliSekarang, urlLearnMore } = props;
  return (
    <div className="site-banner__button">
      <BannerButtonBeliSekarang url={urlBeliSekarang} />
      <BannerButtonLearnMore url={urlLearnMore} />
    </div>
  );
};

export default BannerButton;
