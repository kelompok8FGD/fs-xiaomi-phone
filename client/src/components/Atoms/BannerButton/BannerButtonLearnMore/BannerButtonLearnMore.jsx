import React from "react";
import "./BannerButtonLearnMore.css";
import "../../../organism/Redmi/RedmiPhoneList.css";

const BannerButtonLearnMore = (props) => {
  const { url } = props;
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        window.location.href = url;
      }}
      className="banner-button btn-learn-more"
    >
      Learn More <i className="btn-arrow"></i>
    </button>
  );
};

export default BannerButtonLearnMore;
