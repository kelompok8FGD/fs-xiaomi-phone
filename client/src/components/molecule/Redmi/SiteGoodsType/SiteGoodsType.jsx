import React from "react";
import "../../../organism/Redmi/RedmiPhoneList.css";
import GoodsInfoWrapper from "../SiteGoodsInfoWrapper/SiteGoodsInfoWrapper";

const SiteGoodsType = (props) => {
  const {
    urlProduct,
    Diskon,
    Title,
    Subtitle,
    PriceBefore,
    PriceAfter,
    urlBeliSekarang,
    urlLearnMore,
    ImageProduct,
    CardType = "half",
    ProductName = "redmi-note11",
  } = props;
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        window.location.href = urlProduct;
      }}
      className={`site-goods-${CardType} ${ProductName}`}
    >
      <div className="site-goods__diskon">Diskon {Diskon}%</div>
      <GoodsInfoWrapper
        Title={Title}
        Subtitle={Subtitle}
        PriceBefore={PriceBefore}
        PriceAfter={PriceAfter}
        urlBeliSekarang={urlBeliSekarang}
        urlLearnMore={urlLearnMore}
        ImageProduct={ImageProduct}
      />
    </div>
  );
};

export default SiteGoodsType;
