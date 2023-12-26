import React from "react";
import "../../../organism/Redmi/RedmiPhoneList.css";
import GoodsInfo from "../../../Atoms/GoodsInfo/GoodsInfo";
import GoodsButtonContainer from "../../../Atoms/GoodsButtonContainer/GoodsButtonContainer";
// import GoodsInfo from "../../Elements/GoodsInfo/GoodsInfo";
// import GoodsButtonContainer from "../../Elements/GoodsButtonContainer/GoodsButtonContainer";

const SiteGoodsInfoWrapper = (props) => {
  const {
    Title,
    Subtitle,
    PriceBefore,
    PriceAfter,
    urlBeliSekarang,
    urlLearnMore,
    ImageProduct,
  } = props;
  return (
    <div className="site-goods__info__wrapper">
      <GoodsInfo
        ProductTitle={Title}
        ProductSubtitle={Subtitle}
        PPbefore={PriceBefore}
        PPafter={PriceAfter}
      />
      <GoodsButtonContainer urlBS={urlBeliSekarang} urlLM={urlLearnMore} />
      <div className="site-goods__img-product">
        <img src={ImageProduct} alt="Product Image" />
      </div>
    </div>
  );
};

export default SiteGoodsInfoWrapper;
