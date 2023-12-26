import React from "react";
import "./BannerSubtitle.css";

const BannerSubtitle = (props) => {
  const { UpperText, BottomText } = props;
  return (
    <h4 className="site-banner__subtitle">
      {UpperText} <br /> {BottomText}
    </h4>
  );
};

export default BannerSubtitle;
