import React from "react";
import "../../../organism/Redmi/RedmiPhoneList.css";

const BtnBeliSekarang = (props) => {
  const { url } = props;
  return (
    <button
      className="btn-beli-sekarang"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = url;
      }}
    >
      Beli sekarang
      <i className="beli-sekarang-btn-arrow"></i>
    </button>
  );
};

export default BtnBeliSekarang;
