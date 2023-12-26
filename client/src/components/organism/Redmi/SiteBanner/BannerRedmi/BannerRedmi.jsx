import React from "react";
import "./BannerRedmi.css";
import SiteBannerInfo from "../../../../molecule/Redmi/SiteBannerInfo/SiteBannerInfo";
// import SiteBannerInfo from "../../../Fragments/SiteBannerInfo/SiteBannerInfo";

const BannerRedmi = (props) => {
  const {
    PhoneVariant = "redmi-note12",
    ProductImage,
    HeaderImg,
    SubUp,
    SubBot,
    PriceBefore,
    PriceAfter,
    urlBeli,
    urlLearn,
    urlBanner,
  } = props;
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        window.location.href = urlBanner;
      }}
      className={`site-banner__has-link ${PhoneVariant}`}
    >
      <SiteBannerInfo
        Title={HeaderImg}
        SubtitleUp={SubUp}
        SubtitleBottom={SubBot}
        BPbefore={PriceBefore}
        BPafter={PriceAfter}
        urlBS={urlBeli}
        urlLM={urlLearn}
      />
      <img
        className="site-banner__image"
        src={ProductImage}
        alt="Product Image"
      />
    </div>
  );
};

export default BannerRedmi;
