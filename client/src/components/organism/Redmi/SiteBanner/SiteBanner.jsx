/* eslint-disable no-unused-vars */
import React from "react";
import BannerRedmi from "./BannerRedmi/BannerRedmi";
import HeaderNote12 from "../../../../assets/redmi/header-redmi-note12.svg";
import HeaderNote12Pro from "../../../../assets/redmi/header-redmi-note12pro.svg";
import HeaderNote12Pro5G from "../../../../assets/redmi/header-redmi-note12pro5g.svg";
import RedmiNote12 from "../../../../../public/redmi/redmi-note12-banner.webp";
import RedmiNote12Pro from "../../../../../public/redmi/redmi-note12pro-banner.webp";
import RedmiNote12Pro5G from "../../../../../public/redmi/redmi-note12pro5g-banner.webp";
// import HeaderNote12 from "../../../assets/images/redmi/svg/header-redmi-note12.svg";
// import HeaderNote12Pro from "../../../assets/images/redmi/svg/header-redmi-note12pro.svg";
// import HeaderNote12Pro5G from "../../../assets/images/redmi/svg/header-redmi-note12pro5g.svg";
// import RedmiNote12 from "../../../assets/images/redmi/redmi-note12-banner.webp";
// import RedmiNote12Pro from "../../../assets/images/redmi/redmi-note12pro-banner.webp";
// import RedmiNote12Pro5G from "../../../assets/images/redmi/redmi-note12pro5g-banner.webp";

const SiteBanner = () => {
  return (
    <div className="site-banner">
      <BannerRedmi
        PhoneVariant="redmi-note12"
        HeaderImg={HeaderNote12}
        SubUp="50MP triple kamera｜Layar"
        SubBot="AMOLED 120Hz"
        PriceBefore="2.599.000"
        PriceAfter="2.099.000"
        urlBeli="#"
        urlLearn="#"
        ProductImage={RedmiNote12}
        urlBanner="#"
      />
      <BannerRedmi
        PhoneVariant="redmi-note12pro"
        HeaderImg={HeaderNote12Pro}
        PriceBefore="3.499.000"
        PriceAfter="3.199.000"
        urlBeli="#"
        urlLearn="#"
        ProductImage={RedmiNote12Pro}
        urlBanner="#"
      />
      <BannerRedmi
        PhoneVariant="redmi-note12"
        HeaderImg={HeaderNote12Pro5G}
        SubUp="Kamera flagship SONY IMX766"
        SubBot="dengan OIS"
        PriceBefore="4.599.000"
        PriceAfter="4.299.000"
        urlBeli="#"
        urlLearn="#"
        ProductImage={RedmiNote12Pro5G}
        urlBanner="#"
      />
    </div>
  );
};

export default SiteBanner;
