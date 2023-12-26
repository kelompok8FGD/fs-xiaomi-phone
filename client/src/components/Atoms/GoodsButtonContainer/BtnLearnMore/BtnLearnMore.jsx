import React from "react";
import "../../../organism/Redmi/RedmiPhoneList.css";

const BtnLearnMore = (props) => {
  const { url } = props;
  return (
    <button
      className="btn-learn-more"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = url;
      }}
    >
      Learn More <i className="goods-btn-arrow"></i>
    </button>
  );
};

export default BtnLearnMore;
